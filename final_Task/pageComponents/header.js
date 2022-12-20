const BasePage = require('../pageobjects/basePage');

class Header extends BasePage {

    get currencyButton() {
        return '.simple-menu__currency';
    }
     get changeCurrencyhButton() {
        return '.radio-with-text__flag.flag-kz';
    }
    get AddressButton() {
        return '.simple-menu__link.simple-menu__link--address.j-geocity-link.j-wba-header-item';
    } 
    get popoupLinkContent() {
        return '.popup__content-left.popup__content-left--open';
    } 
    get logInButton() {
        return '.navbar-pc__link.j-main-login.j-wba-header-item';
    } 
    get logInInputField() {
        return '.input-item';
    } 
    get basketButton() {
        return '.navbar-pc__icon.navbar-pc__icon--basket';
    } 
    get phoneField () {
        return '.input-item';
    }
    get requestCodeButton () {
        return 'span.login__message-text.j-error-full-phone.field-validation-error';
    }
    get photoSearchButton () {
        return '.search-catalog__btn.search-catalog__btn--photo.j-search-img-btn.j-wba-header-item';
    }
    get  prevAutButton () {
        return 'login__btn btn-main-lg';
  
}
}
  module.exports = Header;