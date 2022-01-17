const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

module.exports = () => {
  let options = new chrome.Options();
  options.addArguments("--incognito");

  const service = new chrome.ServiceBuilder(chromedriver.path);
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .setChromeOptions(options)
    .build();

  // driver.manage().setTimeouts({ implicit: 0.5 });

  return driver;
};
