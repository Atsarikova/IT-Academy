const { test, expect } = require('@playwright/test');

const BaseElements = require("../helpers/baseelement");
const PageFactory = require("../pageobjects/pagefactory");

test.describe(`test scenarios for wildberries application from the footer`, function () {
test.beforeEach(async ({ page }) => {
  await page.goto('https://by.wildberries.ru/');
});

test('the test checks the possibility of switching to the mobile version', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.footer.mobButton);
    await expect(page.locator(Factory.footer.mobButton)).toHaveText('Загрузить из AppStore');
})

test('the test checks the transition to the page questions and answers ', async ({ page }) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    await Base.click(Factory.footer.answerQuestionButton);
    await expect(page).toHaveURL('https://www.wildberries.by/services/voprosy-i-otvety');

})

test('the test check vk.com link', async ({page, context}) => {
    const Factory = new PageFactory(page);
    const Base = new BaseElements(page);
    const [vkPage] = await Promise.all([context.waitForEvent('page'),
    Base.click(Factory.footer.vkLink)])
    await expect(vkPage).toHaveURL('https://vk.com/public42631504');
})

test('the test check youtube link', async ({page, context}) => {
    const Factory = new PageFactory(page);
    const Base = new BaseElements(page);
    const [youtubePage] = await Promise.all([context.waitForEvent('page'),
    Base.click(Factory.footer.youtubeLink)])
    await expect(youtubePage).toHaveURL('https://www.youtube.com/Wildberriesshop');
})

test('the test check odnoklassniki link', async ({page, context}) => {
    const Factory = new PageFactory(page);
    const Base = new BaseElements(page);
    const [odnoklassnikiPage] = await Promise.all([context.waitForEvent('page'),
    Base.click(Factory.footer.odnoklassnikiLink)])
    await expect(odnoklassnikiPage).toHaveURL('https://ok.ru/wildberriesby');
})

test('the test check transition to seller page', async ({page, context}) => {
    const Base = new BaseElements(page);
    const Factory = new PageFactory(page);
    const [sellerPage] = await Promise.all([context.waitForEvent('page'),
    Base.click(Factory.footer.sellerPageLink) ])
    await expect(sellerPage).toHaveURL(/.*seller.wildberries.ru.*/);

})
})


