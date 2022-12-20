const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
    const distFolder = path.join(
        process.cwd(),
        'dist/server',
        lang
    );
    const server = require(`${distFolder}/main.js`);
    return server.app(lang);
};

function run() {
    const port = process.env['PORT'] || 4200;

    // Start up the Node server
    const appEs = getTranslatedServer("es");
    const appEn = getTranslatedServer("en");

    const server = express();
    server.use("/es", appEs);
    server.use("/en", appEn);
    
    server.listen(port, () => { console.log(`Node Express server listening on http://localhost:${port} (from proxy)`); });
}

run();