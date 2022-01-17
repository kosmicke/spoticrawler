const webdriver = require("selenium-webdriver");
const { timeout, spotify, findAwait } = require("../config/constants");

module.exports = async (driver) => {
  await driver.get("https://open.spotify.com/");

  const login_lnk = await findAwait(
    webdriver.By.css('[data-testid="login-button"]'),
    driver,
    timeout
  );
  await login_lnk.click();

  await driver.wait(webdriver.until.urlContains("/login"), timeout);

  const username_txt = await driver.findElement(
    webdriver.By.css('[data-testid="login-username"]')
  );
  await username_txt.sendKeys(spotify.userName);

  const password_txt = await driver.findElement(
    webdriver.By.css('[data-testid="login-password"]')
  );
  await password_txt.sendKeys(spotify.password);

  const login_btn = await driver.findElement(
    webdriver.By.css('[data-testid="login-button"]')
  );
  await login_btn.click();

  await driver.wait(
    webdriver.until.urlIs("https://open.spotify.com/"),
    timeout
  );
};
