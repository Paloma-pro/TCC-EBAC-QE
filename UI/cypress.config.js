const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://lojaebac.ebaconline.art.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: true,
      mochawesome_filename: 'report.html',
    },
  },
});
