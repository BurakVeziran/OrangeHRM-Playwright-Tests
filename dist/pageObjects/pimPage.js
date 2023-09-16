"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pimPage = void 0;
const test_1 = require("@playwright/test");
const randomValueGenerator_1 = require("../ts/randomValueGenerator");
const randomFirstName = (0, randomValueGenerator_1.randomTextValue)(5);
const randomLastName = (0, randomValueGenerator_1.randomTextValue)(5);
const randomEmployeeID = (0, randomValueGenerator_1.randomNumberValue)(3);
process.env.RANDOMFIRSTNAME = randomFirstName;
process.env.RANDOMLASTNAME = randomLastName;
process.env.RANDOMEMPLOYEEID = randomEmployeeID;
class pimPage {
    constructor() {
        global.add = global.page.getByRole('button', { name: ' Add' });
        global.firstName = global.page.getByPlaceholder('First Name');
        global.lastName = global.page.getByPlaceholder('Last Name');
        global.ID = global.page.locator('form').getByRole('textbox').nth(4);
        global.save = global.page.getByRole('button', { name: 'Save' });
        global.employeeName = global.page.getByPlaceholder('First Name');
        global.employeeID = global.page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first();
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
}
exports.pimPage = pimPage;
module.exports = { pimPage };
