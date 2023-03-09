## Nahuel's personal website!

This is the code for my personal website. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

It uses angular universal for SSR (Server Side Rendering), and reuses the express server as a simple API.

## [Visit my website](https://nahuel.app/en)

#### Warning: 
The files with secret API keys are not included in this repo. if you want to run this app you must create a file named  **`secrets-keys.const.ts`** and **`secrets-firebase-config.const.ts`** in the app's root path.

The file must define these constants:

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

Installation:

`npm install`  

To Start Server:

`npm start`  

To Start Server with SSR:

`npm run dev:ssr`

To build the app with SSR enabled:

`npm run build:ssr`  

To serve the app with SSR enabled:

`npm run serve:ssr`  

To create a docker image of the app with SSR enabled:

`npm run build-image:ssr`  

To start a docker container of the app with SSR enabled:

`npm run start-docker:ssr`  

To Visit App:

`localhost:4200`  

## Personal goals of the project:

  - The main goal is to develop my own website to promote my job. Visit my [LinkedIn!](https://www.linkedin.com/in/nahuel-alderete/)
  - Learn [TailWind CSS](https://tailwindcss.com/docs/guides/angular).
  - Learn Server Side Rendering concepts applied to Angular. For this goal, I am using [Angular Universal](https://angular.io/guide/universal).
  - Improve my knowloge about [Docker](https://www.docker.com/). This app is intended to run in a docker container.

## Thanks for reading!