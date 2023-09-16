const { Given, When , Then } = require('@cucumber/cucumber');
import { loginPage } from '../pageObjects/loginPage';
import { dashboardPage } from '../pageObjects/dashboardPage';
import { pimPage } from '../pageObjects/pimPage';

let page;
Then('I Open PIM page', async function() {
    this.page = page;
    const dashboard = new dashboardPage();
    await dashboard.goToPimPage();
});

Then('I add a new employee', async function() {
    this.page = page;
    const pim = new pimPage();
    await pim.addEmployee();
});

Then('New employee page with information should open', async function() {
    this.page = page;
    const pim = new pimPage();
    await pim.checkNewEmployeeInformation();
});



