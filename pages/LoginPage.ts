import { Screen, Device } from "@mobilewright/core";

export class LoginPage {
  constructor(
    private readonly screen: Screen,
    private readonly device: Device,
  ) {}

  //Locators

  get shopTab() {
    return this.screen.getByLabel("Shop");
  }

  get goToLoginButton() {
    return this.screen.getByText("GO TO LOGIN");
  }

  get usernameTextField() {
    return this.screen.getByTestId("com.demo.lebyy:id/inputUsername");
  }

  get passwordTextField() {
    return this.screen.getByTestId("com.demo.lebyy:id/inputPassword");
  }

  get loginButton() {
    return this.screen.getByLabel("test-LOGIN");
  }

  async loginToApp(username: string, password: string) {
    await this.shopTab.tap()
    await this.goToLoginButton.tap()
    await this.usernameTextField.fill(username);
    await this.passwordTextField.fill(password);
    await this.loginButton.tap();
  }
}
