const BasePage = require('../pageobjects/basePage');

class ProductPages extends BasePage {

    get catologyCardList() {
        return '.product-card-list';
    }
    get productСard() {
        return '.product-card.j-card-item.j-good-for-listing-event .product-card__wrapper :nth-child(1) > div > div :nth-child(2)';
    }
    get addToBasketButton() {
        return 'button[class="btn-main"][data-jsv="#1547^/1547^"]';
    }

  }
  module.exports = ProductPages;