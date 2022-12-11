
const BasePage = require('../pageObjects/basePage');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageComponents/header');
const ApiTestpages = require("../pageObjects/apiTestpages");


class PageFactory {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.mainPage = new MainPage(page);
    this.header = new Header(page);
    this.apiTestpages = new ApiTestpages(page);

  }
}

module.exports = PageFactory;




