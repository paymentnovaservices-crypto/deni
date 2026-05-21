# Deni

Acest repository folosește `pnpm` și este organizat ca un workspace cu mai multe pachete.

## Ce trebuie să știi

- `artifacts/for-deni` este aplicația frontend care rulează cu Vite.
- `package.json` din root conține scripturi helper pentru build-ul frontend.
- `render.yaml` este configurarea Render pentru deploy static.

## Cum construiești proiectul local

1. Instalează dependențele:
   ```bash
   pnpm install
   ```
2. Construiește doar frontend-ul:
   ```bash
   pnpm --filter @workspace/for-deni run build
   ```
3. Rulează frontend-ul local în modul de dezvoltare:
   ```bash
   pnpm --filter @workspace/for-deni run dev
   ```
4. Dacă vrei să previzualizezi build-ul local:
   ```bash
   pnpm --filter @workspace/for-deni run serve
   ```

## Configurare Render

Render folosește `pnpm` și `render.yaml` din root. Structura importantă:

- `buildCommand`: `pnpm --filter @workspace/for-deni run build`
- `publishPath`: `artifacts/for-deni/dist/public`

### Ce trebuie să pui pe Render

- Serviciu static
- Branch: `main`
- Build command: `pnpm --filter @workspace/for-deni run build`
- Publish path: `artifacts/for-deni/dist/public`

> `render.yaml` este deja adăugat în repo și definește serviciul static.

## Cum încarci modificări în GitHub

1. Adaugă fișierele noi/modificate:
   ```bash
   git add README.md render.yaml package.json
   ```
2. Fă commit:
   ```bash
   git commit -m "Add README with Render deployment and upload instructions"
   ```
3. Trimite pe GitHub:
   ```bash
   git push origin main
   ```
