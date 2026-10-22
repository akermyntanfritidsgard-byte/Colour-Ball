# Colour-Ball

En offlinevänlig digital kortlek för Färg-Ball, skapad för fritidsgårdar.

## Lokal utveckling

Kräver Node.js 20.19+ eller 22.12+.

```bash
npm install
npm run dev
```

Öppna adressen som Vite visar (vanligen http://localhost:5173/).

## Kontrollera och testa

```bash
npm test
npm run build
npm run preview
```

Testa PWA/offline efter en produktionsbyggnad via `npm run preview`, installera appen och koppla sedan från nätverket. Lokal `localhost` fungerar som säker kontext för service workers. För att prova på mobil via lokalt nätverk krävs normalt HTTPS för fullständigt PWA-stöd.

GitHub Pages publiceras via Actions efter push till `main` när Pages-källan har ställts till **GitHub Actions** under Settings → Pages.

Inga konton, servrar eller spårningsskript. Namn och omgång sparas endast i webbläsarens lokala lagring.
