const BasePage = require('../pageObjects/basePage');

class Header extends BasePage {

  get getBreadcrumbsLinkn() {

    return '.breadcrumbs__link';
}
get searchButton() {
    return '.DocSearch-Input';

}
get apitesstinghButton() {
    return '[href="/docs/test-api-testing"]';
}

get communityButton() {
    return '[href="/community/welcome"]';
}


  }
  module.exports = Header;