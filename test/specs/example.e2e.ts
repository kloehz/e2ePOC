// ~ search with accessibility label

describe("Simple test", () => {
  it("First test", async () => {
    await browser.pause(3000);
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
  });
});
