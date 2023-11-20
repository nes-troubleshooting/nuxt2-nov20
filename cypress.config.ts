import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
});
