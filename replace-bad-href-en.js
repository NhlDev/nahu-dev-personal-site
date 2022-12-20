
// FIX for bad base tag on english localization build.
// this script add a tailing "/" to the href value => <base href="/en/">
// this fixes problems with routing when using angular universal
// run this script after building the browser app.

const fs = require('fs')
var path = require('path');

const indexHtml = path.join(process.cwd(), 'dist/browser/en', 'index.html');

// Read file into a string
fs.readFile(indexHtml, 'utf-8', (err, contents) => {

  if (err) {
    return console.error(err)
  }

  // Replace string
  const updated = contents.replace("<base href=\"\/en\">", "<base href=\"/en/\">")

  // Write back to file
  fs.writeFile(indexHtml, updated, 'utf-8', err2 => {
    if (err2) {
      console.log(err2)
    }
  })
})