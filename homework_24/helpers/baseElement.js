const BasePage = require('../pageObjects/basePage');



    class BaseElements extends BasePage {
        async click(element) {
          await this.page.locator(element).waitFor('visible');
          await this.page.waitForTimeout(2000);
          await this.page.locator(element).click();
        }

        async wait(element) {
            await element.waitForSelector();
            return element.click();
          }

          async fill(element, text) {
            await this.page.locator(element).waitFor('visible');
            await this.page.locator(element).fill(text);
          }

        }
    

module.exports = BaseElements;
