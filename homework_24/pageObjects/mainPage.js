const BasePage = require('../pageObjects/basePage');

class MainPage extends BasePage {

  get getTitleButton() {
    return ".navbar__inner .navbar__title";
  }

  get getStartedButton() {
    return ".getStarted_Sjon";
  }
  get searchInputField() {
    return ".DocSearch-Button-Placeholder";
}
get getTitleField() {
  return "h1.hero__title.heroTitle_ohkl";
}

}
  module.exports = MainPage;


