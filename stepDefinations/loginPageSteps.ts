const { Given, When , Then } = require('@cucumber/cucumber');
import { loginPage } from '../pageObjects/loginPage';
import { dashboardPage } from '../pageObjects/dashboardPage';

let page;
Given('I am on the login screen', async function() {
  this.page = page;
  const LoginPage = new loginPage();
  await LoginPage.navigateToLoginPage();
});

Then('I write the username and password', async function() {
  this.page = page;
  const LoginPage = new loginPage();
  await LoginPage.fillUsernameAndPassword();
});

Then('I click login button', async function() {
  this.page = page;
  const LoginPage = new loginPage();
  await LoginPage.clickLoginButton();
  await global.page.waitForLoadState('networkidle')
});

Then('I should be logged in', async function() {
  this.page = page;
  const DashboardPage = new dashboardPage();
  await DashboardPage.loginCheck();
});




