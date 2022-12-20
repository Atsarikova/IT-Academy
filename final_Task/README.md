# Get started by installing Playwright using npm
npm init playwright@latest 

## Running all tests
npx playwright test

## Running a single test file
npx playwright test header.spec.js 

[header.spec.js](tests\header.test.spec.js)

## Run the test with the title
npx playwright test -g "add a todo item"

## Running tests just ran a test using browser
npx playwright test --headed

## To open last HTML report run
npx playwright show-report

# My test example

```js

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


```
## OUTPUT test terminal

```

PS C:\Users\User\Desktop\IT-Academy\final_Task> npx playwright test --headed

Running 3 tests using 2 workers

  3 passed (35s)

To open last HTML report run:

  npx playwright show-report

```