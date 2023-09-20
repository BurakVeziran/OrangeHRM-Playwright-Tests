"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const pimPage_1 = require("../pageObjects/pimPage");
let page;
Then('Create an employee report', async function () {
    this.page = page;
    const pim = new pimPage_1.pimPage();
    await pim.createEmployeeReport();
});
Then('Employee report should open', async function () {
    this.page = page;
    const pim = new pimPage_1.pimPage();
    await pim.checkCreatedReportInformation();
});
