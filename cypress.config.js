const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8hiv33',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
