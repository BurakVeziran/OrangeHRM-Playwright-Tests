"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pimPage = void 0;
const test_1 = require("@playwright/test");
const randomValueGenerator_1 = require("../ts/randomValueGenerator");
const randomFirstName = (0, randomValueGenerator_1.randomTextValue)(5);
const randomLastName = (0, randomValueGenerator_1.randomTextValue)(5);
const randomEmployeeID = (0, randomValueGenerator_1.randomNumberValue)(3);
const randomReportName = (0, randomValueGenerator_1.randomTextValue)(5);
process.env.RANDOMFIRSTNAME = randomFirstName;
process.env.RANDOMLASTNAME = randomLastName;
process.env.RANDOMEMPLOYEEID = randomEmployeeID;
process.env.RANDOMREPORTNAME = randomReportName;
class pimPage {
    constructor() {
        global.add = global.page.getByRole('button', { name: ' Add' });
        global.firstName = global.page.getByPlaceholder('First Name');
        global.lastName = global.page.getByPlaceholder('Last Name');
        global.ID = global.page.locator('form').getByRole('textbox').nth(4);
        global.save = global.page.getByRole('button', { name: 'Save' });
        global.employeeName = global.page.getByPlaceholder('First Name');
        global.employeeID = global.page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first();
        global.reportButton = global.page.locator('li').filter({ hasText: 'Reports' });
        global.reportNameInput = global.page.getByPlaceholder('Type here ...');
        global.displayFieldGroupDropdown = global.page.locator('div').filter({ hasText: /^Select Display Field Group-- Select --Select Display Field-- Select --$/ }).locator('i').first();
        global.displayFieldGroupSelection = global.page.getByRole('option', { name: 'Personal' });
        global.displayFieldDropdown = global.page.locator('div').filter({ hasText: /^Select Display Field GroupPersonalSelect Display Field-- Select --$/ }).locator('i').nth(1);
        global.displayFieldSelection = global.page.getByRole('option', { name: 'Employee Id' });
        global.addFilter = global.page.locator('div').filter({ hasText: /^Select Display Field GroupPersonalSelect Display FieldEmployee Id$/ }).getByRole('button');
        global.saveButton = global.page.getByRole('button', { name: 'Save' });
        const reportNameObject = global.page.getByRole('heading', { name: randomReportName });
        const selector = reportNameObject._selector;
        const nameStartIndex = selector.indexOf('name="') + 6;
        const nameEndIndex = selector.indexOf('"', nameStartIndex);
        const nameAttribute = selector.slice(nameStartIndex, nameEndIndex);
        global.reportName = nameAttribute;
    }
    ;
    addEmployee = async () => {
        await global.add.waitFor();
        await global.add.click();
        await global.firstName.waitFor();
        await global.firstName.fill(randomFirstName);
        await global.lastName.waitFor();
        await global.lastName.fill(randomLastName);
        await global.ID.waitFor();
        await global.ID.fill(randomEmployeeID);
        await global.save.waitFor();
        await global.save.click();
    };
    checkNewEmployeeInformation = async () => {
        await global.page.waitForLoadState('networkidle');
        await (0, test_1.expect)(global.employeeName).toHaveValue(randomFirstName);
        await (0, test_1.expect)(global.employeeID).toHaveValue(randomEmployeeID);
    };
    createEmployeeReport = async () => {
        await global.page.waitForLoadState('networkidle');
        await global.reportButton.waitFor();
        await global.reportButton.click();
        await global.add.waitFor();
        await global.add.click();
        await global.reportNameInput.waitFor();
        await global.reportNameInput.fill(randomReportName);
        await global.displayFieldGroupDropdown.waitFor();
        await global.displayFieldGroupDropdown.click();
        await global.displayFieldGroupSelection.waitFor();
        await global.displayFieldGroupSelection.click();
        await global.displayFieldDropdown.waitFor();
        await global.displayFieldDropdown.click();
        await global.displayFieldSelection.waitFor();
        await global.displayFieldSelection.click();
        await global.addFilter.waitFor();
        await global.addFilter.click();
        await global.saveButton.waitFor();
        await global.saveButton.click();
    };
    checkCreatedReportInformation = async () => {
        await global.page.waitForLoadState('networkidle');
        await (0, test_1.expect)(global.reportName).toEqual(randomReportName);
        // await expect(global.reportName).toBeVisible();
    };
}
exports.pimPage = pimPage;
module.exports = { pimPage };
