"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage_1 = require("../pageObjects/loginPage");
const dashboardPage_1 = require("../pageObjects/dashboardPage");
let page;
Given('I am on the dashboard screen', async function () {
    this.page = page;
    const LoginPage = new loginPage_1.loginPage();
    await LoginPage.navigateToLoginPage();
    await LoginPage.fillUsernameAndPassword();
    await LoginPage.clickLoginButton();
});
Then('I write Performance in search', async function () {
    this.page = page;
    const dashboard = new dashboardPage_1.dashboardPage();
    await dashboard.searchWrite();
});
Then('Only performance menu button is should be visible', async function () {
    this.page = page;
    const dashboard = new dashboardPage_1.dashboardPage();
    await dashboard.searchCheck();
});
