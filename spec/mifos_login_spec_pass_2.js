var webdriver = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing'),
    assert = require('assert');

test.describe("Google Search", function() {

    test.it("should take user input correctly", function() {

        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.manage().timeouts().implicitlyWait(1000);

        driver.get("http://localhost:8082/community-app");
        var element = driver.findElement(webdriver.By.id("uid"));
        element.sendKeys("mifos");
        var value = element.getAttribute("value");
        assert(element instanceof webdriver.promise.Promise);
        assert(value instanceof webdriver.promise.Promise);

    });

});
