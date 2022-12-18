const BasePage = require('../pageObjects/basePage');
const MainPage = require('../pageObjects/mainPage');
const Directorypages = require("../pageobjects/directoryPage");
const Search = require('../pageComponents/search');
const ProductPages = require("../pageobjects/productPage");
const Header = require("../pageComponents/header");
const BasketPage = require("../pageobjects/basketPage");
const Footer = require("../pageComponents/footer");




class PageFactory {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.mainPage = new MainPage(page);
    this.directorypages = new Directorypages(page);
    this.search = new Search(page);
    this.productPages = new ProductPages(page);
    this.header = new Header(page);
    this.basketPage = new BasketPage(page);
    this.footer = new Footer(page);



  }
}

module.exports = PageFactory;
