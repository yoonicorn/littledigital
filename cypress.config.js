const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://startling-jalebi-dae04b.netlify.app',
    supportFile: false,
  },
});