const webdriver = require("selenium-webdriver");
const { timeout, findAwait, delay } = require("../config/constants");
const playlist = require("../data/playlist");

module.exports = async (driver) => {
  for (let songLink of playlist.songs) {
    await driver.get(songLink);

    const more_btn = await findAwait(
      webdriver.By.css('[data-testid="more-button"]'),
      driver,
      timeout
    );
    await more_btn.click();

    const add_btn = await driver.findElement(
      webdriver.By.xpath(
        "//div[@id = 'context-menu']//span[contains(text(), 'Add to playlist')]"
      )
    );
    await add_btn.click();

    const playlist_btn = await findAwait(
      webdriver.By.xpath(
        `//div[@id = 'context-menu']//span[contains(text(), '${playlist.name}')]`
      ),
      driver,
      timeout
    );
    await playlist_btn.click();

    await findAwait(
      webdriver.By.xpath(`//*[contains(text(), 'Added to Playlist')]`),
      driver,
      timeout
    );

    await delay(2000);
  }
};
