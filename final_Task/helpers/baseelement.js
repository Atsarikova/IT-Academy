const BasePage = require('../pageobjects/basePage');



    class BaseElements extends BasePage {
        async click(element) {
          await this.page.locator(element).waitFor('visible');
          await this.page.waitForTimeout(3000);
          await this.page.locator(element).click();
        }

        async fill(element, text) {
          await this.page.locator(element).waitFor('visible');
          await this.page.waitForTimeout(3000);
          await this.page.locator(element).fill(text);
        }
        

        
    }

        module.exports = BaseElements;
