import { expect } from "@playwright/test";
import { randomValue, randomNumberValue, randomTextValue } from '../ts/randomValueGenerator';
const randomFirstName = randomTextValue(5);
const randomLastName = randomTextValue(5);
const randomEmployeeID = randomNumberValue(3);
process.env.RANDOMFIRSTNAME = randomFirstName;
process.env.RANDOMLASTNAME = randomLastName;
process.env.RANDOMEMPLOYEEID = randomEmployeeID;
export class pimPage {
    constructor() {
        global.add = global.page.getByRole('button', { name: ' Add' });
        global.firstName = global.page.getByPlaceholder('First Name');
        global.lastName = global.page.getByPlaceholder('Last Name');
        global.ID = global.page.locator('form').getByRole('textbox').nth(4);
        global.save = global.page.getByRole('button', { name: 'Save' });
        global.employeeName = global.page.getByPlaceholder('First Name');
        global.employeeID = global.page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first()
    };
    public addEmployee = async () => {
        await global.add.waitFor()
        await global.add.click();
        await global.firstName.waitFor()
        await global.firstName.fill(randomFirstName);
        await global.lastName.waitFor()
        await global.lastName.fill(randomLastName);
        await global.ID.waitFor()
        await global.ID.fill(randomEmployeeID);
        await global.save.waitFor()
        await global.save.click();
    }

    public checkNewEmployeeInformation = async () => {
        await global.page.waitForLoadState('networkidle')
        await expect(global.employeeName).toHaveValue(randomFirstName);
        await expect(global.employeeID).toHaveValue(randomEmployeeID);
    }
}
module.exports = { pimPage };