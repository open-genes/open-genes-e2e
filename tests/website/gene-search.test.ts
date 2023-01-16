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
describe('Gene search page', () => {
  beforeAll(async () => {
    await createTestEnviropment();
    await page.goto('https://open-genes.com/');
    await page.waitForLoadState('domcontentloaded');
  });
  test('should have input field', async () => {
    const inputElement = await page.$('.search-form__field');
    expect(inputElement).toBeTruthy();
  });
});

afterAll(async () => {
  await context.close();
  await browser.close();
})

