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
  maxInstances: 1,
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  user: "oauth-guido.cotelesso-7b913",
  key: "8378fa3f-5fd4-4030-a18e-bcf734c011cc",
  baseUrl: "wd/hub",

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    "sauce",
    // [
    //   "sauce",
    //   {
    //     sauceConnect: true,
    //   },
    // ],
  ],
  framework: "jasmine",
  reporters: ["spec"],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler(passed, assertion) {},
  },
  capabilities: [
    {
      platformName: "Android",
      platformVersion: "12.0",
      deviceName: "Android GoogleApi Emulator",
      automationName: "UiAutomator2",
      app: "storage:filename=app-qa-release.apk",
      appiumVersion: "1.22.1",
      //// iOS
      // platformName: "iOS",
      //   platformVersion: "15.4",
      //   deviceName: "iPhone Simulator",
      //   automationName: "XCUITest",
      //   app: "storage:filename=MODO.ipa",
      //   appiumVersion: "1.22.3",
    },
  ],
};
