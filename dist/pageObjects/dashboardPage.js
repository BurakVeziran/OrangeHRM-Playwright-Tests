"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardPage = void 0;
class dashboardPage {
    constructor() {
        global.logo = global.page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        global.adminName = global.page.getByRole('banner').getByText('Paul Collings');
    }
    profilePictureCheck = async () => {
        await global.logo.waitFor();
        global.logo.isVisible();
        await global.adminName.waitFor();
        global.adminName.isVisible();
        // await expect(global.adminName).toEqual('Paul Collings'); will fix
    };
}
exports.dashboardPage = dashboardPage;
module.exports = { dashboardPage };
