import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    tsNodeOpts: {
      project: "./test/tsconfig.json",
    },
  },
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      "appium:browserName": "",
      "appium:platformName": "iOS",
      "appium:automationName": "XCUITest",
      "appium:app":
        "/Users/guido.cotelesso/Documents/MODO/payment-mobile/ios/build/Build/Products/QA-iphonesimulator/MODO.app",
      "appium:platformVersion": "16.2",
      "appium:deviceName": "iPhone 14",
    },
  ],
  baseUrl: "http://localhost",
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  port: 4723,
  framework: "jasmine",
  reporters: ["spec, allure"],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler(passed, assertion) {},
  },
};
