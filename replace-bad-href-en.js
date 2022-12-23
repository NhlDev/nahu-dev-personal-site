
// FIX for bad base tag on english localization build.
// this script add a tailing "/" to the href value => <base href="/en/">
// this fixes problems with routing when using angular universal
// run this script after building the browser app.

const fs = require('fs');
var path = require('path');

const indexHtml = path.join(process.cwd(), 'dist/browser/en', 'index.html');

console.info('Replacing  <base href="/en"> to <base href="/en/">');
console.info('Replacing  <title>Nahuel Alderete - Desarrollador</title> to <title>Nahuel Alderete - Developer</title>');

// Read file into a string
fs.readFile(indexHtml, 'utf-8', (err, contents) => {
  if (err) { return console.error(err); }

  // Replace string
  const updated = contents
    .replace("<base href=\"\/en\">", "<base href=\"/en/\">")
    .replace("<title>Nahuel Alderete - Desarrollador</title>", "<title>Nahuel Alderete - Developer</title>");

  // Write back to file
  fs.writeFile(indexHtml, updated, 'utf-8', err2 => {
    if (err2) {
      console.log(err2);
      return
    }
    console.info('Replace complete. English localization fixed');
  });
});
