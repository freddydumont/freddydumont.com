const { launch } = require('qawolf');
const selectors = require('../selectors/return_home');

describe('Navigation between blog and home page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch({ url: 'http://localhost:8000/' });
    page = await browser.page();
  });

  afterAll(() => browser.close());

  it('goes to blog when clicking "blog" link', async () => {
    await browser.click(selectors[0]);
    await page.waitForNavigation();
    expect(await page.url()).toMatch(/blog/i);
  });

  it('returns to home page when clicking logo', async () => {
    await browser.click(selectors[1]);
    await page.waitForNavigation();
    expect(await page.url()).not.toMatch(/blog/i);
  });
});
