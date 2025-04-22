import type { NightwatchTests } from "nightwatch";

const navagation: NightwatchTests = {
  "Home page": async () => {
    await browser.navigateTo("/");
    await browser.element
      .findByText("Welcome", { exact: false })
      .assert.visible();

    await browser.element.findByRole("navigation").assert.visible();
  },

  "About page": async () => {
    await browser
      .navigateTo("/")
      .element.findByText("About", { exact: false })
      .click();

    await browser.element
      .findByText("Under constructing", { exact: false })
      .assert.visible();

    await browser.element.findByRole("navigation").assert.visible();
  },

  "Game page - Pong": async () => {
    await browser
      .navigateTo("/")
      .element.findByText("Game", { exact: false })
      .click();

    const pong = browser.element.findByText("Pong", { exact: false });
    await pong.assert.visible();

    await pong.click();

    await browser.element.findByRole("button").assert.present("Play");
  },

  "Pong Play": async () => {
    await browser
      .navigateTo("/")
      .element.findByText("Game", { exact: false })
      .click();

    const pong = browser.element.findByText("Pong", { exact: false });
    await pong.assert.visible();

    await pong.click();

    await browser.element.findByRole("button").click();

    await browser.element.find("#bevy-canvas").assert.visible();
  },
};

export default navagation;
