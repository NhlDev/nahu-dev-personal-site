## Sitio personal de Nahuel!

Este es el código de mi sitio personal. Fue generado con Angular [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

Esta app usa Renderizado Lado servidor (SSR por sus siglas en ingles), y reutiliza el servidor express para una simple API.

## [Visita mi sitio](https://nahuel.app/es)

#### Atención:
Los archivos con las claves secretas de APIs no están incluidos en el repo. Si quieres correr la aplicación, deberás crear un archivo llamado **`secrets-keys.const.ts`** y **`secrets-firebase-config.const.ts`** en la raíz de la aplicación.

El objeto dentro del archivo debe ser definido de la siguiente manera:

**`secrets-keys.const.ts`**
```
export const RECAPTCHA_SITE_KEY = 'yourRecaptchaSiteKey';
export const MAIL_USER = 'youmail@gmail.com';
export const MAIL_APP_KEY = 'yourAppPassword';
export const RECAPTCHA_SERVER_SECRET = 'yourRecaptchaSecret';
```

**`secrets-keys.const.ts`**
```
export const FIREBASE_CONFIG = {
   YOUR_FIREBASE_CONFIG
}
```

Instalacion:

`npm install`  

Para iniciar la aplicación:

`npm start`  

Para iniciar la aplicación con SSR:

`npm run dev:ssr`

Para compilar la aplicación con SSR:

`npm run build:ssr`  

Para iniciar la aplicación con SSR:

`npm run serve:ssr`  

Para crear una imagen docker de la aplicacion con SSR:

`npm run build-image:ssr`  

Para inciar un contenedor docker de la aplicacion:

`npm run start-docker:ssr`  

Para visitar la app (localmente):

`localhost:4200`  

## Objetivos personales del proyecto:

  - El objetivo principal es desarrollar mi sitio web personal para promover mi trabajo. Visita mi [LinkedIn!](https://www.linkedin.com/in/nahuel-alderete/)
  - Aprender [TailWind CSS](https://tailwindcss.com/docs/guides/angular).
  - Aprender los conceptos de Renderizado Lado Servidor aplicado a Angular. Para este objetivo, estoy usando [Angular Universal](https://angular.io/guide/universal).
  - Mejorar mis conocimientos sobre [Docker](https://www.docker.com/). Esta aplicación esta pensada para correr en un contenedor docker.

## Gracias por leer!