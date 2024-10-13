const { resolve } = require('node:path');
const { launch } = require('puppeteer');
const renderer = require('./renderer');
const getResume = require('./get-resume');

(async () => {
    const resume = await getResume();
    const html = await renderer.render(resume);

    const browser = await launch();
    const page = await browser.newPage()

    await page.setContent(html);
    await page.pdf({
        path: resolve(__dirname, '..', 'resume.pdf'),
        format: 'A4',
        printBackground: true
    });

    await browser.close();
})();