const { test, expect } = require('@playwright/test');

const BaseElements = require("../helpers/baseelement");
const PageFactory = require("../pageobjects/pagefactory");

test.describe(`test scenarios for wildberries application from the header`, function () {
test.beforeEach(async ({ page }) => {
  await page.goto('https://by.wildberries.ru/');
});

 test('the test checks the possibility of changing the currency', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.currencyButton);
    await Base.click(Factory.header.changeCurrencyhButton);
    await expect(Factory.header.changeCurrencyhButton).toBeEnabled;
});

 test('The test checks the correctness of the transition to the address page of the pickup point', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.AddressButton);
    expect(page.locator(Factory.header.popoupLinkContent)).toBeVisible;
});

test('The test checks LogIn', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.logInButton);
    expect(page.locator(Factory.header.logInInputField)).toBeVisible;
});

test('The test check login with incorrect number', async ({page}) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.logInButton);
    await Base.fill(Factory.header.phoneField, '1111');
    expect(page.locator(Factory.header.requestCodeButton)).toBeVisible;
});

test('The test check login with correct number', async ({page}) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.logInButton);
    await Base.fill(Factory.header.phoneField, '1378814');
    expect(page.locator(Factory.header.prevAutButton)).toBeVisible;
});

test('The test checks the transition from the main menu to the basket', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.header.basketButton);
    await expect(page.locator(Factory.basketPage. basketCheckButton)).toHaveText('В корзине пока пусто')
});

test('The test checks support chat button', async ({page}) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.mainPage.supportButton);
    await Base.fill(Factory.directorypages.chatAreaButton, 'Добрый день');
    await expect(page.locator(Factory.directorypages.chatButton)).toBeVisible(); 
});

test('The test checks photo search', async ({page}) => {
   const Base = new BaseElements(page);
   const Factory = new PageFactory(page);
   await Base.click(Factory.header.photoSearchButton); 
   await expect(page.locator(Factory.header.photoSearchButton)).toBeEnabled();
});

})


