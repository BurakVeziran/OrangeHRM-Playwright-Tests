"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage_1 = require("../pageObjects/loginPage");
const dashboardPage_1 = require("../pageObjects/dashboardPage");
let page;
Given('I am on the login screen', async function () {
    this.page = page;
    const LoginPage = new loginPage_1.loginPage();
    await LoginPage.navigateToLoginPage();
});
Then('I write the username and password', async function () {
    this.page = page;
    const LoginPage = new loginPage_1.loginPage();
    await LoginPage.fillUsernameAndPassword();
});
Then('I click login button', async function () {
    this.page = page;
    const LoginPage = new loginPage_1.loginPage();
    await LoginPage.clickLoginButton();
    await global.page.waitForLoadState('networkidle');
});
Then('I should be logged in', async function () {
    this.page = page;
    const DashboardPage = new dashboardPage_1.dashboardPage();
    await DashboardPage.profilePictureCheck();
});
