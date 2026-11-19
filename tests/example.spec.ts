// this is a skeleton test for mobilewright (see https://github.com/mobile-next/mobilewright/blob/main/README.md)
// for documentation see: https://mobilewright.dev/docs/
// for agent skill see: https://github.com/mobile-next/mobilewright-skill
import { test, expect } from "@mobilewright/test";

// test.skip("Login", async ({ screen, device }) => {
//   await screen.getByTestId("com.demo.lebyy:id/tabAccount").tap();
//   await screen.getByTestId("com.demo.lebyy:id/inputUsername").fill("demo_user");
//   await screen.getByTestId("com.demo.lebyy:id/inputPassword").fill("demo_pass");
//   // hide the keyboard
//   await screen.pressButton("BACK");
//   await screen.getByLabel("test-LOGIN").tap();
// });

// test.beforeEach(async ({ screen, device }) => {

// });

test.afterEach(async ({ screen, device }) => {
  await device.terminateApp("com.demo.lebyy"); //bundleId: com.demo.lebyy
});

test("Shopping", async ({ screen, device }) => {
  await screen.getByLabel("Shop").tap();
  await screen.getByText("GO TO LOGIN").tap();
  await screen.getByTestId("com.demo.lebyy:id/tabAccount").tap();
  await screen.getByTestId("com.demo.lebyy:id/inputUsername").fill("demo_user");
  await screen.getByTestId("com.demo.lebyy:id/inputPassword").fill("demo_pass");
  // hide the keyboard
  await screen.pressButton("BACK");
  await screen.getByLabel("test-LOGIN").tap();
  await screen.getByText("Exit Bank").tap();
  await screen.getByLabel("Shop").tap();
  await screen.getByText("ADD TO CART").first().tap();
  await screen.getByLabel("test-CartCount").tap();
});

test("Alerts", async ({ screen, device }) => {
  await screen.getByLabel("Shop").tap();
  await screen.getByText("GO TO LOGIN").tap();
  await screen.getByTestId("com.demo.lebyy:id/tabAccount").tap();
  await screen.getByTestId("com.demo.lebyy:id/inputUsername").fill("demo_user");
  await screen.getByTestId("com.demo.lebyy:id/inputPassword").fill("demo_pass");
  // hide the keyboard
  await screen.pressButton("BACK");
  await screen.getByLabel("test-LOGIN").tap();
  await screen.getByText("Exit Bank").tap();
  await screen.getByLabel("Shop").tap();
  await screen.getByLabel("test-Menu").tap();
  await screen.getByLabel("test-Alerts").tap();
  await screen.getByLabel("test-Alert").tap();
  const text = await screen.getByTestId("android:id/message").getText();
  console.log("------", text);
  await screen.getByText("OK").tap();
});

test("Forms", async ({ screen, device }) => {
  await screen.getByLabel("Shop").tap();
  await screen.getByText("GO TO LOGIN").tap();
  await screen.getByTestId("com.demo.lebyy:id/tabAccount").tap();
  await screen.getByTestId("com.demo.lebyy:id/inputUsername").fill("demo_user");
  await screen.getByTestId("com.demo.lebyy:id/inputPassword").fill("demo_pass");
  // hide the keyboard
  await screen.pressButton("BACK");
  await screen.getByLabel("test-LOGIN").tap();
  await screen.getByText("Exit Bank").tap();
  await screen.getByLabel("Shop").tap();
  await screen.getByLabel("test-Menu").tap();
  await screen.getByTestId("com.demo.lebyy:id/drawerForms").tap();
  await screen.getByText("Dropdown, checkboxes, radios").tap();
  await screen.getByTestId("com.demo.lebyy:id/dropdown").tap();
  await screen.getByTestId("com.demo.lebyy:id/radioTwo").tap();
});
