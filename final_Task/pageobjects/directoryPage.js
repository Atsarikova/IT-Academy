
const BasePage = require('../pageobjects/basePage');

class Directorypages extends BasePage {

    get catologyButoonNovyGod() {
        return '.menu-burger__main-list-link.menu-burger__main-list-link--128518';
    }
    get chatAreaButton() {
        return '.chat__textarea.j-chat-textarea';
    }
    get chatButton() {
        return '.chat__btn-submit';
    }
    get viewProductButton() {
        return 'a[href="https://www.wildberries.by/catalog/46595398/detail.aspx?targetUrl=XS"]';
    }
    get clothesManButton() {
        return 'a[href="https://www.wildberries.by/catalog/muzhchinam"]';
    }
    get filterclothesButton () {
        return 'a[href="/catalog/muzhchinam/odezhda/longslivy"]';
    }
    get colorFilterDarkButton() {
        return 'span[class="color-item "][style="background-color: #000000"]';
    }
    get clothesButton () {
        return 'a[href="/catalog/muzhchinam/plyazhnay-odezhda"]';
    }
    get cardsizesButton () {
    return '.card-sizes-link.card-sizes-link--c516x688.active';
    }
    get nextPageButton () {
    return '.pagination-next.pagination__next';
    }
    get AcardBigsizesButton () {
    return '.card-sizes-link.card-sizes-link--big.active'; 
    }
    get cardBigButton () {
    return '.card-sizes-link.card-sizes-link--big';
    }


    }
  module.exports = Directorypages;