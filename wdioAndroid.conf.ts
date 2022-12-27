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
      "appium:platformName": "ANDROID",
      "appium:automationName": "UiAutomator2",
      //   "appium:app": "/Users/guido.cotelesso/Desktop/app-qa-release.apk",
      "appium:app":
        "/Users/guido.cotelesso/Documents/MODO/payment-mobile/android/app/build/outputs/apk/qa/release/app-qa-release.apk",
      "appium:udid": "emulator-5554",
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
  reporters: ["spec"],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler(passed, assertion) {},
  },
};
