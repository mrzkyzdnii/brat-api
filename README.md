# Brat Canvas Vercel API

API sederhana berbasis Vercel Functions.

## Instalasi

```bash
npm install
npm install -g vercel
vercel dev
```

## Endpoint

```text
/brat-text=halo kalian semua?emoji=twitter
/bratvid-text=halo kalian semua?emoji=iphone
```

Format query yang lebih aman untuk teks dengan spasi dan emoji:

```text
/api/brat-text?text=halo%20kalian%20semua&emoji=twitter
/api/bratvid-text?text=halo%20kalian%20semua%20😭✨&emoji=iphone
```

`emoji=iphone` dipetakan ke style `apple` karena itu nama style yang diterima brat-canvas.

Output `/brat-text` adalah PNG. Output `/bratvid-text` adalah GIF animasi yang dapat langsung ditampilkan di browser dan dikirim sebagai media animasi.

API tidak mengunggah hasil ke storage. Buffer hanya dibuat di memory selama request, dikirim sebagai response, lalu dilepas setelah request selesai. Header `X-Storage-Policy` menandai kebijakan ini dan `Cache-Control: no-store` mencegah cache. Jika nanti diubah agar memakai object storage, hapus object maksimal 60 detik setelah dibuat.
