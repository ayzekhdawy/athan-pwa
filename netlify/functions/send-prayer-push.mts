import webpush from 'web-push';
import {
  deleteDeviceRecord,
  listDeviceRecords,
  saveDeviceRecord
} from './_lib/push-store.mjs';

function configureWebPush() {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;

  if (!publicKey || !privateKey || !subject) {
    throw new Error('Missing VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, or VAPID_SUBJECT.');
  }

  webpush.setVapidDetails(subject, publicKey, privateKey);
}

type ScheduleEntry = { type: string; label: string; timeUtc: string };
type NotificationTemplate = { title: (label: string) => string; body: (label: string) => string };

// Push copy per app language; entry.label is already translated on the device
const notificationCopy: Record<string, Record<string, NotificationTemplate>> = {
  en: {
    newIslamicMonth: {
      title: () => 'New Islamic Month',
      body: () => 'Maghrib has entered with the start of a new Hijri month.'
    },
    default: {
      title: (label: string) => `${label} reminder`,
      body: (label: string) => `It is time for ${label}.`
    }
  },
  tr: {
    newIslamicMonth: {
      title: () => 'Yeni Hicri Ay',
      body: () => 'Yeni Hicri ayın başlangıcıyla akşam vakti girdi.'
    },
    sunrise: {
      title: () => 'Güneş vakti',
      body: () => 'Güneş doğdu.'
    },
    lastThird: {
      title: () => 'Gecenin son üçte biri',
      body: () => 'Gecenin son üçte biri başladı; dua için en kıymetli vakit.'
    },
    firstThirdEnd: {
      title: () => 'Gecenin ilk üçte biri',
      body: () => 'Gecenin ilk üçte biri sona erdi.'
    },
    default: {
      title: (label: string) => `${label} vakti`,
      body: (label: string) => `${label} vakti girdi.`
    }
  }
};

function createNotificationPayload(entry: ScheduleEntry, locale = 'en') {
  const copy = notificationCopy[locale] || notificationCopy.en;
  const template = copy[entry.type] || copy.default;
  const title = template.title(entry.label);
  const body = template.body(entry.label);

  return JSON.stringify({
    title,
    body,
    tag: `azan-${entry.type}`,
    icon: '/icon-192.png',
    badge: '/notification-badge.svg',
    data: {
      type: entry.type,
      timeUtc: entry.timeUtc
    }
  });
}

export default async () => {
  configureWebPush();

  const now = Date.now();
  const minDueTime = now - (2 * 60 * 1000);
  const maxDueTime = now + (60 * 1000);
  const records = await listDeviceRecords();
  let sentCount = 0;

  for (const record of records) {
    if (!record.notificationsEnabled || !record.subscription?.endpoint) {
      continue;
    }

    const dueEntries = (record.schedule || []).filter((entry: { timeUtc: string; sent?: boolean; sentAt?: string | null }) => {
      if (entry.sent || entry.sentAt) return false;
      const scheduledTime = new Date(entry.timeUtc).getTime();
      return scheduledTime >= minDueTime && scheduledTime <= maxDueTime;
    });

    if (dueEntries.length === 0) {
      continue;
    }

    let shouldDeleteRecord = false;

    for (const entry of dueEntries) {
      try {
        await webpush.sendNotification(record.subscription, createNotificationPayload(entry, record.locale));
        entry.sent = true;
        entry.sentAt = new Date().toISOString();
        sentCount += 1;
      } catch (error) {
        const statusCode = error && typeof error === 'object' && 'statusCode' in error
          ? Number(error.statusCode)
          : 0;

        if (statusCode === 404 || statusCode === 410) {
          shouldDeleteRecord = true;
          break;
        }

        console.error(`Failed to send push for ${record.deviceId}:`, error);
      }
    }

    if (shouldDeleteRecord) {
      await deleteDeviceRecord(record.deviceId);
      continue;
    }

    record.schedule = (record.schedule || []).filter((entry: { timeUtc: string; sentAt?: string | null }) => {
      const scheduledTime = new Date(entry.timeUtc).getTime();
      return scheduledTime > now - (24 * 60 * 60 * 1000) && (!entry.sentAt || scheduledTime > now - (5 * 60 * 1000));
    });
    record.updatedAt = new Date().toISOString();
    await saveDeviceRecord(record);
  }

  return Response.json({ ok: true, sentCount, processed: records.length });
};

export const config = {
  schedule: '* * * * *'
};
