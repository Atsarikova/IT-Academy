const BasePage = require('../pageobjects/basePage');

class BasketPage extends BasePage {

  get basketCheckButton() {
    return "h1.section-header";
  }
  get addProductButton() {
    return "div:nth-child(2)>div>button:nth-child(2)>span.hide-mobile";
  }

}
  module.exports = BasketPage;