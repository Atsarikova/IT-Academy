const BasePage = require("./BasePage");
class MainPage extends BasePage {

    get getStartedButton () {
        return $('.buttons_pzbO>a:nth-child(1)')
    }
}

module.exports = new MainPage();

