const BasePage = require('../pageobjects/basePage');

class Footer extends BasePage {

    get mobButton() {
        return '.app-store';
    }
    get answerQuestionButton() {
        return '[href="/services/voprosy-i-otvety"]';
    }
    get vkLink (){
        return'[href="http://vk.com/club42631504"]';
    }
    get sellerPageLink (){
        return '//*[@data-wba-footer-name="Seller"]/a';
    }
    get sellerPageLink (){
    return'//*[@data-wba-footer-name="Seller"]/a';
    }
    get youtubeLink (){
        return' [href="https://www.youtube.com/Wildberriesshop"]';    
    }
    get phoneField (){
        return '//*[@class="SimpleInput--vVIag Login-phone__masked-input--nPE+0"]';    
    }    
    get messageField (){
        return '//*[@class="Login-phone__input-error--G4jI5"]/span';        
    }
    get odnoklassnikiLink (){
        return' [href="http://www.odnoklassniki.ru/wildberriesby"]';           
    }

   
 
  }
  module.exports = Footer;