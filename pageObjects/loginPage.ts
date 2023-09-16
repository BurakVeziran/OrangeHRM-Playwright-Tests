import { expect } from "@playwright/test";
export class loginPage {
  constructor() {
    global.usernameInput = global.page.getByPlaceholder('Username')
    global.passwordInput = global.page.getByPlaceholder('password')
    global.loginButton = global.page.getByRole('button', { name: 'Login' });
  }
  public navigateToLoginPage = async () => {
    await global.page.goto(global.BASE_URL);
  }

  public fillUsernameAndPassword = async () => {
    await global.usernameInput.waitFor()
    await global.usernameInput.fill(global.USERNAME);
    await global.passwordInput.waitFor()
    await global.passwordInput.fill(global.PASSWORD);
  }

  public clickLoginButton = async () => {
    await global.loginButton.click();
  }
}

module.exports = { loginPage };