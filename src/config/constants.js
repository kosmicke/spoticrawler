const webdriver = require("selenium-webdriver");

const timeout = 5000;

const spotify = {
  userName: "",
  password: "",
};

const findAwait = async (selector, driver, timeoutParam) => {
  const element = await driver.wait(
    webdriver.until.elementLocated(selector),
    timeoutParam
  );

  return element;
};

const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

module.exports = {
  findAwait,
  timeout,
  spotify,
  delay,
};
