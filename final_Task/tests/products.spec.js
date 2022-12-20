
const { test, expect } = require('@playwright/test');


const BaseElements = require("../helpers/baseelement");
const PageFactory = require("../pageobjects/pageFactory");

test.describe(`test scenarios for wildberries application to check adding products and filtering`, function () {
test.beforeEach(async ({ page }) => {
  await page.goto('https://by.wildberries.ru/');
});


test('The test checks homepage has title and URL', async ({ page }) => {
  await expect(page).toHaveTitle(/Wildberries - модный интернет магазин/);
  await expect(page).toHaveURL('https://www.wildberries.by/');
});

test('The test checks the page selection from the catalog', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.mainPage.navigationButton);
  await Base.click(Factory.directorypages.catologyButoonNovyGod);
  await expect(page).toHaveURL('https://www.wildberries.by/catalog/novyy-god');
});

test('The test checks product search', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.search.searchField);
  await Base.fill(Factory.search.searchField, 'Новогодний подарок');
  await Base.click(Factory.search.searchButton);
  expect(page.locator(Factory.productPages.catologyCardList)).toBeVisible;
});

test('The test checks the search for products by brand', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.search.searchField);
  await Base.fill(Factory.search.searchField, 'adidas');
  await Base.click(Factory.search.searchButton);
  await expect(page).toHaveURL('https://www.wildberries.by/brands/adidas');
});

test('The test hecks that color filter is applying when searching for a product', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.mainPage.navigationButton);
  await Base.click(Factory.directorypages.clothesManButton);
  await Base.click(Factory.directorypages.filterclothesButton);
  await Base.click(Factory.directorypages.colorFilterDarkButton);
  await expect(page.locator(Factory.directorypages.colorFilterDarkButton)).toBeEnabled();
});

test('The test checks the possibility of choosing a size', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.mainPage.navigationButton);
  await Base.click(Factory.directorypages.clothesManButton);
  await Base.click(Factory.directorypages.clothesButton);
  await Base.click(Factory.directorypages.cardsizesButton);
  await expect(page.locator(Factory.directorypages.cardsizesButton)).toBeEnabled();
});

test('The test checks the switch to the choice of large sizes', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.mainPage.navigationButton);
  await Base.click(Factory.directorypages.clothesManButton);
  await Base.click(Factory.directorypages.clothesButton);
  await Base.click(Factory.directorypages.cardBigButton);
  await expect(page).toHaveURL('https://www.wildberries.by/catalog/muzhchinam/plyazhnay-odezhda?sort=popular&cardsize=big&page=1');
});

test('The test checks the ability to navigate to the next page when clicking the next page ', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.mainPage.navigationButton);
  await Base.click(Factory.directorypages.clothesManButton);
  await Base.click(Factory.directorypages.clothesButton);
  await Base.click(Factory.directorypages.nextPageButton);
  await expect(page).toHaveURL('https://www.wildberries.by/catalog/muzhchinam/plyazhnay-odezhda?sort=popular&page=2');
 
});

test('The test checks the possibility of adding a product to the cart while browsing the products', async ({ page }) => {
  const Base = new BaseElements(page);
  const Factory = new PageFactory(page);
  await Base.click(Factory.search.searchField);
  await Base.fill(Factory.search.searchField, 'гирлянда на елку');
  await Base.click(Factory.search.searchButton);
  await Base.click(Factory.directorypages.viewProductButton);
  await expect(page.locator(Factory.basketPage.addProductButton)).toHaveText('Добавить в корзину');
});
})



















































