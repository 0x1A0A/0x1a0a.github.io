import type { NightwatchTests } from "nightwatch";

const article: NightwatchTests = {
  "Read Article": async () => {
    await browser
      .navigateTo("/")
      .element.findByText("Article", { exact: false })
      .click();

    await browser
      .click("#articles-container a:first-child")
      .waitForElementVisible("article")
      .quit();
  },

  "Go back to articles": async () => {
    await browser
      .navigateTo("/")
      .element.findByText("Article", { exact: false })
      .click();

    const articles = browser.element.findElement("#articles-container");
    await articles.findElement("a:first-child").click();

    browser.assert.visible("h1");
    await browser.click('[data-testid="back-to-articles"]');

    await browser.assert.visible("nav");
  },
};

export default article;
