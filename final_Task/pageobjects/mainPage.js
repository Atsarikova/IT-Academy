const BasePage = require('../pageobjects/basePage');

class MainPage extends BasePage {

  get navigationButton() {
    return ".nav-element__burger";
  }
  get aunthtButton() {
    return ".navbar-pc__icon.navbar-pc__icon--basket";
  }
  get supportButton() {
    return ".smm-fixed__toggle.j-btn-chat-open";
  }


}
  module.exports = MainPage;