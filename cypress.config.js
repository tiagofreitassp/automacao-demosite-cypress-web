const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    video: true,
    videosFolder: "cypress/videos",
    videoCompression: 32,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})