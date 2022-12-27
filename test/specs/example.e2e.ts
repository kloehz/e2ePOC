// ~ -> search with accessibility label
import allureReporter from "@wdio/allure-reporter";
import wd from "wd";

let capabilities = {};
capabilities["platformName"] = "iOS";
capabilities["appium:deviceName"] = "iPhone Simulator";
capabilities["appium:deviceOrientation"] = "portrait";
capabilities["appium:platformVersion"] = "15.4";
capabilities["appium:automationName"] = "XCUITest";
capabilities["appium:app"] = "storage:filename=MODO.ipa";
capabilities["sauce:options"] = {
  build: "appium-build-Y8G0P",
  name: "Simple test",
};

let hostname = "ondemand.us-west-1.saucelabs.com";
let port = 443;
let user = "oauth-guido.cotelesso-7b913";
let key = "8378fa3f-5fd4-4030-a18e-bcf734c011cc";
let baseUrl = "wd/hub";
let driver = await wd.remote({
  hostname,
  port,
  user,
  key,
  baseUrl,
  capabilities,
});

describe("Simple test", () => {
  it("First test", async () => {
    allureReporter.addFeature("Login");
    await browser.pause(2000);
    browser.acceptAlert();
    await browser.pause(3000);
    await $("~Empezar").click();
    await $("~Masculino").click();
    const dni = "37930873";
    for (let i = 0; i < dni.length; i++) {
      await $(`~${dni[i]}`).click();
    }
    await $("~Continuar").click();
    const phone = "2477566569";
    for (let i = 0; i < phone.length; i++) {
      await $(`~${phone[i]}`).click();
    }
    await $("~phone-onboarding-action-button").click();
    const password = "252254";
    for (let i = 0; i < password.length; i++) {
      await $(`~number-key-${password[i]}`).click();
    }
    // await browser.pause(3000);
    // await $("~custom-tab-bar-item-container-Billetera").click();
    // await $("~SELECTOR-ITEM-Asociar una nueva tarjeta").click();
    // await browser.pause(3000);
    // const test = await $("#full_name").getHTML();
    // console.log("Test: ", test);
    // await browser.pause(3000);
  });
});
