const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angularElementsTest/runtime-es5.js',
        './dist/angularElementsTest/polyfills-es5.js',
        './dist/angularElementsTest/scripts.js',
        './dist/angularElementsTest/main-es5.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/test-custom.js');

    await fs.copyFile('./dist/angularElementsTest/styles.css', 'elements/styles.css')

    await fs.copy('./dist/angularElementsTest/assets/', 'elements/assets/' )

    await fs.copyFile('./test.html', 'elements/index.html')

    await fs.copyFile('src/favicon.ico', 'elements/favicon.ico')
    
})()