import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  viewportWidth: 1800,
  viewportHeight: 1000,

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
});
