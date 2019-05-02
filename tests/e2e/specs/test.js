// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Test for Login and Cards Page': browser => {
    browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.login-form')
        .setValue('input[type=text]', 'test@test.com')
        .setValue('input[type=password]', 'test1234')
        .click('.button.is-primary')
        .pause(5000)
        .waitForElementVisible('.tasks', 5000)
        .assert.containsText('h1', 'Requirements')
        .click('.button.is-primary')
        .pause(5000)
        .assert.visible('.table-container')
        .end()
  },
  'Test for Registration': browser => {
    browser
        .url('http://localhost:8080/register')
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.register-form')
        .assert.visible('#email.input')
        .assert.visible('#password.input')
        .assert.visible('#passwordConfirm.input')
        .assert.elementPresent('.button.is-primary')
        .end()
  }
};


