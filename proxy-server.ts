import * as express from 'express';
import * as path from 'path';
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from './secrets-firebase-config.const';

function firebaseInit() { return initializeApp(FIREBASE_CONFIG); }

const getTranslatedServer = (lang: string = '') => {
    const distFolder = path.join(
        process.cwd(),
        'dist/server',
        lang
    );
    const server = require(`${distFolder}/main.js`);
    return server.app(lang);
};

function run() {

    //init Firebase
    console.log(firebaseInit());

    const port = process.env['PORT'] || 4200;

    // Start up the Node server
    const appEs = getTranslatedServer("es");
    const appEn = getTranslatedServer("en");

    const server = express();
    server.use("/es", appEs);
    server.use("/en", appEn);

    server.use("", appEs);

    server.listen(port, () => { console.log(`Node Express server listening on http://localhost:${port} (from proxy)`); });
}

run();