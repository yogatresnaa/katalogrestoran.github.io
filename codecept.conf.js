/* eslint-disable import/no-extraneous-dependencies */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1200x900',
    },
  },
  include: {
    I: './steps_file.js',
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },

    screenshotOnFail: {
      enabled: true,
    },
  },

  bootstrap: null,
  mocha: {},
  name: 'restaurant-apps-integrationTes-prformance -endtoend',
};
