const MainPage = require("../../MainPage");
const Header = require("../../header");
const search = require("../../search");



describe('Webdriver IO site testing', () => {
    it('Title testing', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await MainPage.getStartedButton.click()
        await expect(browser).toHaveTitleContaining('Getting Started');
    })

    it('Checking the name of all items in the Menu', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await expect(Header.docsTab).toHaveText('Docs');
        await expect(Header.apiTab).toHaveText('API');
        await expect(Header.blogTab).toHaveText('Blog');
        await expect(Header.contributeTab).toHaveText('Contribute');
        await expect(Header.communityTab).toHaveText('Community');
    });

    
    it('The test check the clickability of the search button', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await search.searchButton.click();
        await search.searchInput.setValue('WebdriverIO');
        await expect(browser).isClickable;
       
    })

    it('The test check the transition to page', async () => {
        await MainPage.navigate('https://webdriver.io/');
        await Header.communityTab.click();
        await expect.toHaveUrl('https://webdriver.io/community/support');
    })

})







