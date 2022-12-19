// ~ search with accessibility label
import allureReporter from "@wdio/allure-reporter";

describe("Simple test", () => {
  it("First test", async () => {
    allureReporter.addFeature("Login");
    await browser.pause(2000);
    browser.acceptAlert();
    $("~Empezar").click();
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
    await browser.pause(3000);
    await $("~custom-tab-bar-item-container-Billetera").click();
    await $("~SELECTOR-ITEM-Asociar una nueva tarjeta").click();
    await browser.pause(3000);
    const test = await $("#full_name").getHTML();
    console.log("Test: ", test);
    await browser.pause(3000);
  });
});
