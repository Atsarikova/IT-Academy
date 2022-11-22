const { describe, beforeEach } = require('mocha');
const { Builder, By, Key } = require('selenium-webdriver');
const { expect } = require("chai");

describe ("first test", function() {

    let driver;

    beforeEach(async() => {
        driver = await new Builder().forBrowser("chrome").build();
    });
    
    afterEach(async()=> {
        await driver.close();
    });

    it("The first test checks the text of the title", async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.manage().window().maximize(); 
        const ChromeExtentionsButton = await driver.findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//*[@href="/extensions"]'));
        await ChromeExtentionsButton.click();
        expect(await driver.getTitle()).to.contain('Chrome Extensions');
        
    })

    it("The second test goes to the search page", async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const search_Button = await driver.findElement(By.css('.RBEWZc'));
        await driver.wait(function () {
            return search_Button.isDisplayed();
        }, 2000);
        await search_Button.click();
        const search_Field = await driver.findElement(By.xpath('//*[@class="whsOnd zHQkBf"]'));
        await search_Field.sendKeys('driver');
        const Serve_Search_Button = await driver.findElement(By.xpath('//*[@class="U26fgb mUbCce fKz7Od i3PoXe M9Bg4d"]'));
        await Serve_Search_Button.click();
        await driver.sleep(3000);
    })

      it ("The third test checks the content of the url", async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.manage().window().maximize(); 
        const ChromeAdditionalButton = await driver.findElement(By.css('.mBHtvb.u5fiyc'));
        await ChromeAdditionalButton.click();
        const ChromeMobileEmulation = await driver.findElement(By.xpath('//*[@class="PsKE7e IKA38e oNsfjf"]//*[@href="/mobile-emulation"'));
        await ChromeMobileEmulation.click();
        expect(await driver.getCurrentUrl()).to.equal('https://chromedriver.chromium.org/mobile-emulation');
      })
    })
    











