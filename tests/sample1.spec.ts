import { test } from "@mobilewright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login", async ({ screen, device }) => {
  const loginPage = new LoginPage(screen, device);
  await loginPage.loginToApp("demo_user", "demo_pass");
});

