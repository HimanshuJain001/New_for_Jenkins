const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); // ✅ This line is required!

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // ✅ Now this works because it's defined
      return config;
    },
    experimentalSessionAndOrigin: true,
  }
});
