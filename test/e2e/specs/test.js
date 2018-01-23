// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.about-page', 5000)
      .assert.containsText('h1', 'ABOUT')
      .click('.tab-link-works a')
      .waitForElementVisible('.works-page', 1000)
      .assert.containsText('h1', 'WORKS')
      .click('.tab-link-blog a')
      .waitForElementVisible('.blog-page', 1000)
      .assert.containsText('h1', 'BLOG')
      .click('.tab-link-about a')
      .waitForElementVisible('.about-page', 1000)
      .assert.containsText('h1', 'ABOUT')
      .end();
  },
};
