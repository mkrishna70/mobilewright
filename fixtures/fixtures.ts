import { test as base } from "@mobilewright/test";
import { LoginPage } from "../pages/LoginPage";

type myFixture = {
  loginPage: LoginPage;
};

export const test = base.extend<myFixture>({
  loginPage: async ({ screen, device }, use) => {
    const loginPage = new LoginPage(screen, device);
    await loginPage.loginToApp("demo_user", "demo_pass");
    await use(loginPage);
  },
});
