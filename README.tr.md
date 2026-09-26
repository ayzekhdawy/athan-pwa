<p align="center">
  <img src="static/logoazan.png" alt="Azan logosu" width="180" />
</p>

<h1 align="center">Azan</h1>

<p align="center">
  Sakin animasyonlar, şehre göre hesaplama ve cihazda kalan verilerle tasarlanmış, gizliliği önceleyen bir namaz vakitleri PWA'sı.
</p>

<p align="center">
  <a href="README.md">English</a> · <strong>Türkçe</strong>
</p>

<p align="center">
  <a href="https://privateathan.netlify.app/"><strong>Uygulamayı aç</strong></a>
</p>

<p align="center">
  <img src="docs/readme/privacy-flow.svg" alt="Gizlilik öncelikli bildirim akışı şeması" width="100%" />
</p>

## Bu uygulama neden var?

Çoğu namaz uygulaması ihtiyacından fazlasını ister.

Azan farklı bir fikir üzerine kurulu: Bir namaz arkadaşı güzel, güvenilir ve gizliliğe derinden saygılı olmalı. Uygulama namaz vakitlerini cihazda hesaplar, canlı konum paylaşmak yerine şehir seçmenize izin verir ve anlık bildirim hatırlatmalarını bile şehrinizi ya da yaklaşık konumunuzu sunucuda saklamadan gönderir.

Bu deponun kalbinde bu gizlilik modeli yatıyor.

## Gizlilik

### Saklamadıklarımız

- Hesap sistemi yok
- E-posta, telefon numarası veya kimlik bilgisi yok
- Analitik ya da izleme betiği yok
- Sunucuda kesin koordinat yok
- Anlık bildirimler için sunucuda şehir adı yok
- Canlı konum geçmişi yok

### Bunun yerine cihazda yapılanlar

- Şehri kullanıcı kendisi seçer
- Namaz vakitleri cihazda hesaplanır
- Kıble GPS'ten değil, seçilen şehirden hesaplanır
- Tercihler cihazın yerel depolamasında tutulur
- Bildirim takvimi senkronizasyondan önce cihazda oluşturulur

### Bildirim sunucusunun sakladıkları

Hatırlatmalar bilerek en az veriyle çalışır. Netlify yalnızca bir bildirimi daha sonra iletebilmek için gereken anonim verileri saklar: cihaz kimliği (rastgele UUID), push aboneliği, açık olan hatırlatma türleri, UTC zaman damgalı takvim ve uygulama dili kodu (`en` ya da `tr`).

Yani sunucu bir cihaza nasıl bildirim göndereceğini bilir, ama o kişinin nerede yaşadığını bilmez.

## Öne çıkanlar

- Siyah üzerine altın tonlarıyla zarif, sade İslami tasarım
- `adhan` kütüphanesiyle doğru namaz vakti hesaplaması
- Sıradaki vakte geri sayım
- Seçilen şehre göre kıble yönü (isteğe bağlı pusula izniyle)
- Çevrimdışı destekli, ana ekrana eklenebilir PWA
- Türkçe ve İngilizce arayüz, 24 saat biçimi ve Pazartesi ile başlayan takvim
- Diyanet İşleri Başkanlığı dahil 12 hesaplama yöntemi ve özel açı ayarı
- Şunlar için anonim hatırlatmalar:
  - beş vakit namaz
  - güneşin doğuşu
  - gecenin son üçte biri
  - gecenin ilk üçte birinin sonu
  - akşam vaktinde yeni Hicri ayın başlangıcı

## Dil

Uygulama ilk açılışta cihaz dilini izler; dil, Ayarlar'ın en üstündeki **Dil** bölümünden istediğiniz zaman değiştirilebilir. Seçim cihazda saklanır ve bildirimler de seçilen dilde gelir.

Namaz vakti adları Diyanet takvimindeki kullanımı izler: İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı.

Çeviriler `src/lib/i18n/locales/` klasöründedir. Yeni bir dil eklemek için `en.js` dosyasını kopyalayıp değerleri çevirin ve `src/lib/i18n/translate.js` içinde kaydedin; `tests/i18n.test.js` tüm anahtarların eksiksiz olduğunu denetler.

## Bildirimler nasıl çalışır?

1. Kullanıcı uygulamada bir şehir seçer.
2. Uygulama namaz vakitlerini cihazda hesaplar.
3. Yaklaşan hatırlatmaları UTC zaman damgalarına çevirir.
4. Netlify'a yalnızca push aboneliğini, hatırlatma tercihlerini, dil kodunu ve UTC takvimini gönderir.
5. Zamanlanmış bir Netlify Function vakti gelen hatırlatmaları kontrol edip bildirimi gönderir.
6. Service worker bildirimi cihazda gösterir.

Böylece hassas hesaplama bilgisi cihazda kalırken arka planda hatırlatma yapılabilir.

## Konum takibi olmadan kıble

Azan'ın kıbleyi göstermek için canlı GPS'e ihtiyacı yoktur.

- Kıble, seçili şehrin koordinatlarından hesaplanır
- Destekleyen cihazlarda pusula/yön izni göstergenin canlı dönmesini sağlar
- Bu bir sensör iznidir, konum izni değildir
- Uygulamanın kullanıcının nerede durduğunu sürekli izlemesi gerekmez

## Teknolojiler

- SvelteKit
- Svelte
- Namaz vakitleri ve kıble hesabı için `adhan`
- Push uç noktaları için Netlify Functions
- Anonim cihaz kayıtları için Netlify Blobs
- Bildirim iletimi için Web Push (`web-push`)

## Yerel geliştirme

```bash
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
npm run preview
```

Testler:

```bash
node --test tests/*.test.js
```

## Push ortam değişkenleri

Bildirim desteği için şunları tanımlayın:

```env
VITE_VAPID_PUBLIC_KEY=your_public_vapid_key_here
VAPID_PUBLIC_KEY=your_public_vapid_key_here
VAPID_PRIVATE_KEY=your_private_vapid_key_here
VAPID_SUBJECT=mailto:you@example.com
```

Notlar:

- `VITE_VAPID_PUBLIC_KEY` bilerek herkese açıktır ve istemci paketine eklenir
- `VAPID_PRIVATE_KEY` gizli kalmalıdır
- `VAPID_SUBJECT` `mailto:hello@yourdomain.com` gibi gerçek bir iletişim adresi olmalıdır

## Yükleme

### iPhone / iPad

1. Siteyi Safari'de açın
2. Paylaş'a dokunun
3. `Ana Ekrana Ekle`'ye dokunun

### Android

1. Siteyi Chrome'da açın
2. Tarayıcı menüsünü açın
3. `Yükle` veya `Ana ekrana ekle`'ye dokunun

## Katkı

Türkçe çeviri: [@ayzekdiolar](https://x.com/ayzekdiolar)
