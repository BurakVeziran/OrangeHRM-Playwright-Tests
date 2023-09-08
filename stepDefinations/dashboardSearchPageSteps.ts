const { Given, When , Then } = require('@cucumber/cucumber');
import { loginPage } from '../pageObjects/loginPage';
import { dashboardPage } from '../pageObjects/dashboardPage';

let page;
Given('I am on the dashboard screen', async function() {
    this.page = page;
    const LoginPage = new loginPage();
    await LoginPage.navigateToLoginPage();
    await LoginPage.fillUsernameAndPassword();
    await LoginPage.clickLoginButton();
});

Then('I write Performance in search', async function() {
    this.page = page;
    const dashboard = new dashboardPage();
    await dashboard.searchWrite();
});

Then('Only performance menu button is should be visible', async function() {
    this.page = page;
    const dashboard = new dashboardPage();
    await dashboard.searchCheck();
});



