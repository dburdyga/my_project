// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test for Login': browser => {
    browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.login-form')
        .assert.visible('#email.input')
        .assert.visible('#password.input')
        .assert.elementPresent('.button.is-primary')
        .assert.containsText('a', 'Registration')
        .end()
  }
};


