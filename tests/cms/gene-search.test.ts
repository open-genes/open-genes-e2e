import { chromium, Browser, BrowserContext, Page } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

const createTestEnviropment = async () => {
  browser = await chromium.launch({
    headless: false,
  });
  context = await browser.newContext();
  page = await context.newPage();
};
describe('CMS authorization', () => {
  beforeAll(async () => {
    await createTestEnviropment();
    await page.goto(process.env.CMS_LOGIN_PAGE);
    await page.waitForLoadState('domcontentloaded');
  });
  test('should work and redirect to the Gene Table index page', async () => {
    await page.type('#loginform-username', process.env.CMS_LOGIN);
    await page.type('#loginform-password', process.env.CMS_PASSWORD);
    await page.click('[type="submit"]');
    await page.waitForNavigation({timeout: 30000});
    const geneIndexBlock = await page.$eval('.gene-index.container-fluid', element => element);
    expect(geneIndexBlock).not.toBeNull();
  });
});

afterAll(async () => {
  await context.close();
  await browser.close();
})

