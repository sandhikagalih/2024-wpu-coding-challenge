# TypeScript

https://www.typescriptlang.org/

## Memulai

Untuk menjalankan file TypeScript terdapat dua jenis runtime yang bisa kita
gunakan: [Deno](https://deno.com/) dan [Node.js](https://nodejs.org/). Karena
Deno lebih simpel dan mudah digunakan, kami dengan sepenuh hati menyarankan
kalian untuk mencobanya.

(Semoga playlist TypeScript dan Deno masuk roadmap Pak Dhika 😁)

## Cara Pertama: Deno (Direkomendasikan)

1. Install
   [Deno](https://docs.deno.com/runtime/manual/getting_started/installation).
2. Buka terminal, kemudian `cd` atau arahkan ke lokasi direktori ini.
3. Install extension atau plugin Deno di code editor. Jika menggunakan
   [Visual Studio Code](https://code.visualstudio.com/), install extension yang
   disarankan
   ([vscode_deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)).
   Untuk code editor lainnya silahkan periksa di
   [dokumentasi berikut](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment).
4. Jalankan file yang diinginkan dengan menuliskan perintah berikut ke terminal:
   > `deno run [lokasi_file]`

   Ganti `[lokasi_file]` dengan lokasi file yang ingin dijalankan.

   Sebagai contoh, untuk menjalankan file `1-grow.ts` yang berada di direktori
   `src`, maka:
   > `deno run src/1-grow.ts`

5. Untuk melakukan pengetesan, ganti perintah `deno run ...` pada poin 3 di atas
   dengan `deno test ...`. File pengetesan berada di direktori `test/deno/`.

## Cara Kedua: Node.js

1. Install [Node.js](https://nodejs.org/en/download).
2. Buka terminal, kemudian `cd` atau arahkan ke lokasi direktori ini.
3. Install semua dependensi yang dibutuhkan:
   > `npm install -D typescript mocha`
4. Sebelum menjalankan file, compile terlebih dahulu file TypeScript menjadi
   JavaScript dengan menjalankan perintah:
   > `npx tsc`
5. Jalankan file yang diinginkan dengan menuliskan perintah berikut ke terminal:
   > `node [lokasi_file]`

   Ganti `[lokasi_file]` dengan lokasi file yang ingin dijalankan.

   Sebagai contoh, untuk menjalankan file `1-grow.js` yang berada di direktori
   `src`, maka:
   > `node src/1-grow.js`

   ⚠️ **PERHATIKAN!** Extension file di atas adalah `.js`, bukan `.ts`.
6. Untuk pengetesan, jalankan perintah:
   > `npx mocha [lokasi_file]`

   File pengetesan berada di direktori `test/nodejs/`.
7. Jika melakukan perubahan di salah satu file TypeScript, ulangi langkah nomor
   4 supaya file di-compile ulang.
