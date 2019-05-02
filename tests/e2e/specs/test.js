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
        .pause(2000)
        .waitForElementVisible('.tasks', 5000)
        .assert.containsText('h1', 'Requirements')
        .click('.button.is-primary')
        .pause(5000)
        .waitForElementVisible('.table-container', 5000)
        .setValue('#crNumber.input[type=text]', 'CR 123445')
        .setValue('#title.input[type=text]', 'Test Change 8')
        .setValue('#project.input[type=text]', 'BOSH')
        .setValue('#jiraLink.input[type=text]', 'jira Link')
        .setValue('#createdAt.input[type=text]', '02.05.2019')
        .click('.button.is-link')
        .pause(8000)
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


