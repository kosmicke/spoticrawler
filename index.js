const buildDriver = require("./src/config/build-driver");
const playlistAdd = require("./src/scripts/playlist-add");
const login = require("./src/scripts/login");

(async () => {
  let driver = buildDriver();

  try {
    await login(driver);
    await playlistAdd(driver);
  } catch (error) {
    console.log(error);
  }

  await driver.quit();
})();
