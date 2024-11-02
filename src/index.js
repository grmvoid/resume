const { resolve } = require('node:path');
const { launch } = require('puppeteer');
const renderer = require('./renderer');
const getResume = require('./get-resume');

(async () => {
    const browser = await launch();
    const resume = await getResume();

    for (const [lang, data] of Object.entries(resume)) {
        const html = await renderer.render(data, lang);
        const page = await browser.newPage()

        await page.setContent(html);
        await page.pdf({
            path: resolve(__dirname, '..', 'output', lang + '.pdf'),
            format: 'A4',
            printBackground: true
        });
    }
    
    await browser.close();
})();