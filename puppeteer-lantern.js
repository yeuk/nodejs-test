// Puppeteer 就是浏览器

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:50954/d41691fa3e46f002db7b94b35b017e56/?utm_campaign=show-lantern&utm_content=&utm_medium=tray&utm_source=darwin#/account');
    await page.screenshot({ path: 'storage/lantern.png' });

    await browser.close();
})();