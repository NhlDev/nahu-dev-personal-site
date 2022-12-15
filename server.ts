import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { sendMail } from './mail-sender'
import { PRIVATE_KEYS } from 'secrets-keys.const';

const bodyParser = require('body-parser');

const TO_ADDRESS = 'nahuel.ald@gmail.com'


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/nahu-dev-personal-site/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({ bootstrap: AppServerModule, }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use(bodyParser.json());


  server.post('/api/*', (req, res) => {

    console.log(req.body);

    switch (req.url) {
      case '/api/send-message':
        if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
          return res.status(400).send({ success: false, message: "captcha verification missing" });
        }

        return testVerification(req.body['g-recaptcha-response'])
          .then((isHuman) => {
            if (isHuman) {
              return sendMail(req.body['name'], req.body['email'], TO_ADDRESS, req.body['messageBody'])
                .then((info) => { return res.status(200).send({ success: true, message: "OK" }); })
                .catch(() => { return res.status(404).send({ success: false, message: "mail error" }); });
            }
            else {
              return res.status(401).send({ success: false, message: "captcha verification failed" })
            }
          });

      default:
        return res.status(404).send({ success: false, message: "not found" })
    }
  });

  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => { res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] }); });

  return server;
}


function testVerification(recaptchaToken: string) {
  const secretKey = PRIVATE_KEYS.RECAPTCHA_SERVER_SECRET;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  return fetch(verificationURL, { method: 'POST' })
    .then((rawResponse) => rawResponse.json())
    .then((googleResponse) => {
      return googleResponse.success;
    });
}


function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => { console.log(`Node Express server listening on http://localhost:${port}`); });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
