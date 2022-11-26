class Header {


    get docsTab() {
        return $('div[class="navbar__items"] a:nth-child(3)');
    }

    get apiTab() {
        return $('div[class="navbar__items"] a:nth-child(4)');
    }

    get blogTab() {
        return $('div[class="navbar__items"] a:nth-child(5)');
    }

    get contributeTab() {
        return $('div[class="navbar__items"] a:nth-child(6)');
    }

    get communityTab() {
        return $('div[class="navbar__items"] a:nth-child(7)');
    }

 


}

module.exports = new Header();
