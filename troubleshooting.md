# Troubleshooting

### Rounds 2 & 3

Resolved babel conflicts, and identified potential culprit related to dynamic imports.

### Round 1

Using the provided `npm ls --depth=1000` output, install all frontline dependencies exactly as-is:

```shell
npm i -D \
  @babel/eslint-parser@7.23.3 \
  @babel/plugin-proposal-async-generator-functions@7.20.7 \
  @babel/plugin-proposal-dynamic-import@7.18.6 \
  @babel/plugin-proposal-export-namespace-from@7.18.9 \
  @babel/plugin-proposal-json-strings@7.18.6 \
  @babel/plugin-proposal-logical-assignment-operators@7.20.7 \
  @babel/plugin-proposal-numeric-separator@7.18.6 \
  @babel/plugin-proposal-object-rest-spread@7.20.7 \
  @babel/plugin-proposal-optional-catch-binding@7.18.6 \
  @babel/plugin-proposal-unicode-property-regex@7.18.6 \
  @babel/preset-env@7.12.17 \
  @babel/preset-modules@0.1.6 \
  @nuxtjs/axios@5.13.6 \
  @nuxtjs/sitemap@2.4.0 \
  12factor-config@2.0.0 \
  axios@0.26.1 \
  babel-plugin-dynamic-import-node@2.3.3 \
  base64url@3.0.1 \
  dom-to-image@2.6.0 \
  dotenv@16.3.1 \
  eslint-config-airbnb-base@15.0.0 \
  eslint-plugin-html@7.1.0 \
  eslint-plugin-import@2.29.0 \
  eslint-plugin-vue@9.18.1 \
  eslint@8.53.0 \
  got@12.6.1 \
  jest@26.6.3 \
  koa-bodyparser@4.4.1 \
  koa-compose@4.1.0 \
  koa-passport@6.0.0 \
  koa-route@3.2.0 \
  lodash@4.17.21 \
  passport-openidconnect@0.1.1 \
  pdf-lib@1.17.1 \
  pre-commit@1.2.2 \
  puppeteer@20.9.0 \
  qs@6.11.2 \
  request@2.88.2 \
  sass-loader@10.4.1 \
  sass@1.69.5 \
  vue-flagpack@1.0.1 \
  vue-jest@4.0.1
```

Could not test:

```text
@<private>/ewi-orphan-content@4.0.0
@<private>/global-nuxt-wrapper-koa@5.0.0
@<private>/global-pkg-koa-starter@5.0.3
@<private>/global-std-cicd-config@3.1.1
@<private>/<private>-design-system@6.0.0
```
