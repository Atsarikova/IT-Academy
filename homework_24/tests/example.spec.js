
const { test, expect } = require('@playwright/test');
const BaseElements = require('../helpers/baseElement');
const PageFactory = require("../pageObjects/pageFactory");

test.beforeEach(async ({ page }) => {
    const F = new PageFactory(page);
    await F.mainPage.navigate('https://playwright.dev/');    
});

test.describe(`the test checks the correctness of the transition to the page`, function () {
  test('Check', async ({ page }) => {
    const Factory = new PageFactory(page);
    const Base = new BaseElements(page);
    await Base.click(Factory.mainPage.getStartedButton);
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
    
  })
})
test('Check page title text', async ({ page }) => {
  const Factory = new PageFactory(page);
  const Base = new BaseElements(page);
  await Base.click(Factory.mainPage.getTitleButton);
  await expect(page.locator(Factory.mainPage.getTitleButton)).toHaveText('Playwright')
});

test('check search results', async ({ page }) => {
const Factory = new PageFactory(page);
const Base = new BaseElements(page);
await Base.click(Factory.mainPage.searchInputField);
await Base.fill(Factory.header.searchButton, 'api');
await Base.click(Factory.header.apitesstinghButton);
expect(page.locator(Factory.apiTestpages.apiTestresult)).toBeVisible
  
expect(page.locator('theme-doc-markdown markdown')).toBeVisible
})
test('the test checks the clickability of the button community', async ({ page }) => {
  const Factory = new PageFactory(page);
  const Base = new BaseElements(page);
  await Base.click(Factory.header.communityButton);
  await expect(page).toHaveURL('https://playwright.dev/community/welcome');

})

test('The test checks the content of the title block', async ({ page }) => {
const Factory = new PageFactory(page);
const Base = new BaseElements(page); 
await Base.click(Factory.mainPage.getTitleField);
await expect(page.locator(Factory.mainPage.getTitleField)).toHaveText('Playwright enables reliable end-to-end testing for modern web apps.')
})

