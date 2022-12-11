const BasePage = require('../pageObjects/basePage');

class ApiTestpages extends BasePage {

  get apiTestresult() {

    return 'theme-doc-markdown markdown';
}

  }
  module.exports = ApiTestpages;