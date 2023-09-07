"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
class HomePage {
    constructor() {
        global.logo = global.page.locator('img[alt="Google"]');
        global.searchButton = global.page.getByRole('button', { name: 'Google Search' });
        global.luckyButton = global.page.getByRole('button', { name: 'I\'m Feeling Lucky' });
    }
    navigateToHomePage = async () => {
        await global.page.goto(global.BASE_URL);
        await global.page.waitForLoadState('networkidle');
    };
    verifyButtonsAreVisible = async () => {
        await (0, test_1.expect)(global.logo).toBeVisible();
        await (0, test_1.expect)(global.searchButton).toBeVisible();
        await (0, test_1.expect)(global.luckyButton).toBeVisible();
    };
}
exports.HomePage = HomePage;
module.exports = { HomePage };
