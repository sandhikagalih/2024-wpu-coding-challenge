# Dart

https://dart.dev/

## Persiapan

Kami berasumsi kalau kalian sudah menginstall [Dart](https://dart.dev/) di
perangkat masing-masing, baik yang berupa
[bundle](https://docs.flutter.dev/get-started/install) dengan
[Flutter](https://flutter.dev/), maupun [terpisah](https://dart.dev/get-dart).

## Memulai

1. Buka terminal, lalu `cd` atau arahkan ke lokasi direktori ini.
2. Install dependensi yang diperlukan:
   > `dart pub get`
3. Jalankan file yang diinginkan dengan menuliskan perintah berikut ke terminal:
   > `dart run [lokasi_file]`

   Ganti `[lokasi_file]` dengan lokasi file yang ingin dijalankan.

   Sebagai contoh, untuk menjalankan file `1-grow.dart` yang berada di direktori
   `src`, maka:
   > `dart run lib/src/1-grow.dart`
4. Untuk melakukan pengetesan, ganti perintah `dart run ...` pada poin 3 di atas
   dengan `dart test ...`. File pengetesan berada di direktori `test/`.
