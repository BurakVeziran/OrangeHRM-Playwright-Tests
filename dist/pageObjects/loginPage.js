"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
class loginPage {
    constructor() {
        global.usernameInput = global.page.getByPlaceholder('Username');
        global.passwordInput = global.page.getByPlaceholder('password');
        global.loginButton = global.page.getByRole('button', { name: 'Login' });
    }
    navigateToLoginPage = async () => {
        await global.page.goto(global.BASE_URL);
        await global.page.waitForLoadState('networkidle');
    };
    fillUsernameAndPassword = async () => {
        await global.usernameInput.waitFor();
        await global.usernameInput.fill(global.USERNAME);
        await global.passwordInput.waitFor();
        await global.passwordInput.fill(global.PASSWORD);
    };
    clickLoginButton = async () => {
        await global.loginButton.click();
    };
}
exports.loginPage = loginPage;
module.exports = { loginPage };
