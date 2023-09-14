"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardPage = void 0;
const test_1 = require("@playwright/test");
class dashboardPage {
    constructor() {
        global.profilePicture = global.page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        global.header = global.page.locator('div').filter({ hasText: /^Dashboard$/ });
        global.logo = global.page.getByRole('link', { name: 'client brand banner' });
        global.searchInput = global.page.getByPlaceholder('Search');
        global.admin = global.page.getByRole('link', { name: 'Admin' });
        global.PIM = global.page.getByRole('link', { name: 'PIM' });
        global.leave = global.page.getByRole('link', { name: 'Leave' });
        global.time = global.page.getByRole('link', { name: 'Time' });
        global.recruitment = global.page.getByRole('link', { name: 'Recruitment' });
        global.myInfo = global.page.getByRole('link', { name: 'My Info' });
        global.performanceButton = global.page.getByRole('link', { name: 'Performance' });
        global.buzzButton = global.page.getByRole('link', { name: 'Buzz' });
        global.dashboard = global.page.getByRole('link', { name: 'Dashboard' });
        global.directory = global.page.getByRole('link', { name: 'Directory' });
        global.maintenance = global.page.getByRole('link', { name: 'Maintenance' });
        global.claim = global.page.getByRole('link', { name: 'Claim' });
    }
    loginCheck = async () => {
        await global.profilePicture.waitFor();
        await global.profilePicture.isVisible();
        await global.logo.waitFor();
        await global.logo.isVisible();
        await global.header.waitFor();
        await global.header.isVisible();
    };
    searchWrite = async () => {
        await global.searchInput.click();
        await global.searchInput.fill('Performance');
    };
    searchCheck = async () => {
        await global.page.waitForLoadState('networkidle');
        await global.performanceButton.waitFor();
        await global.performanceButton.isVisible();
        await (0, test_1.expect)(global.claim).not.toBeVisible();
    };
}
exports.dashboardPage = dashboardPage;
module.exports = { dashboardPage };
