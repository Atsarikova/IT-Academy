const BasePage = require('../pageobjects/basePage');

class Search extends BasePage {

    get searchField() {
        return '.search-catalog__input.j-wba-header-item';
    }
     get searchButton() {
        return '//*[@id="applySearchBtn"]';  
    }

}
  module.exports = Search;