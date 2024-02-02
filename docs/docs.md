# Proje Dokümantasyonu

## İçindekiler

- [Giriş](#giriş)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)

## Giriş

Proje bir nextjs projesidir. Tasarım tailwind kullanılarak oluşturulmuştur.

## Kurulum

"npm i" komutu ile "node_modules" kurulur.

"npm run dev" ile uygulama development modunda ayağa kaldırılır.

"npm run build" ile build alınabilir.

Projenin kurulumu ve ayağa kaldırılması için ssh bağlantısı yapılıp build alınması gerekmektedir.

### SSH Bağlantısı

"ssh root@162.222.206.225"

ardından şifre => "4&!1k@#Zjn"

dosya dizini var/www/clean-iot

## Kullanım

Sayfaların hepsi birer js dosyası içerisindedir ve pages klasöründen ulaşılabilir. Bazı tekrar eden komponentler components klasörü içerisinde bulunmaktadır.

data.json dosyası ise içerisinde bulunduğu ve deploy edildiği repo'nun içerisinden çekilmektedir. Nextjs'in basit api mantığı kullanılmıştır.

Email işlemleri pages > api > email.js içerisinde bulunmaktadır.

Email için gerekli olan email ve şifre .env içerisinden gelmektedir.
