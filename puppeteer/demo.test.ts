import puppeteer from "puppeteer";

describe('puppeteer test', () => {

  it('should be defined', async () => {

    const browser = await puppeteer.launch({headless: 'new', args: ['--headless=\'shell\'']});
    const page = await browser.newPage();

    await page.goto("http://localhost:1342/");

    await page.waitForSelector(`body`, {timeout: 5000, visible: true});

    await browser.close();
  });

});
