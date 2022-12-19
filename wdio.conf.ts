import type { Options } from "@wdio/types";
import allure from "allure-commandline";

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
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler(passed, assertion) {},
  },
  afterTest: async function (step, { error, duration, passed }, context) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }
        console.log("Allure report successfully generated");
        resolve(true);
      });
    });
  },
};
