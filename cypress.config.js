const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    video: false,
    retries: 1,
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
