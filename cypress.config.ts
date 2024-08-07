import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      configureAllureAdapterPlugins(on, config);
      return config;
    },

    baseUrl: "https://reqres.in",
    env: {
      allure: true,
      apiUrl: "https://reqres.in/api",
    },
    supportFile: false,
  },
});
