const { Given, When , Then } = require('@cucumber/cucumber');
import { loginPage } from '../pageObjects/loginPage';
import { dashboardPage } from '../pageObjects/dashboardPage';
import { pimPage } from '../pageObjects/pimPage';

let page;

Then('Create an employee report', async function() {
    this.page = page;
    const pim = new pimPage();
    await pim.createEmployeeReport();
});

Then('Employee report should open', async function() {
    this.page = page;
    const pim = new pimPage();
    await pim.checkCreatedReportInformation();
});



