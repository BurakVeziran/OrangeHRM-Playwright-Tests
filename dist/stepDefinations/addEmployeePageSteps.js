"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const dashboardPage_1 = require("../pageObjects/dashboardPage");
const pimPage_1 = require("../pageObjects/pimPage");
let page;
Then('I Open PIM page', async function () {
    this.page = page;
    const dashboard = new dashboardPage_1.dashboardPage();
    await dashboard.goToPimPage();
});
Then('I add a new employee', async function () {
    this.page = page;
    const pim = new pimPage_1.pimPage();
    await pim.addEmployee();
});
Then('New employee page with information should open', async function () {
    this.page = page;
    const pim = new pimPage_1.pimPage();
    await pim.checkNewEmployeeInformation();
});
