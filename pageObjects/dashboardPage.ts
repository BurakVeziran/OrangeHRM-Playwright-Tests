import { expect } from "@playwright/test";
export class dashboardPage {
  constructor() {
    global.logo = global.page.getByRole('banner').getByRole('img', { name: 'profile picture' });
    global.adminName = global.page.getByRole('banner').getByText('Paul Collings');

  }
  public profilePictureCheck = async () => {
    await global.logo.waitFor()
    global.logo.isVisible();
    await global.adminName.waitFor()
    global.adminName.isVisible();
    // await expect(global.adminName).toEqual('Paul Collings'); will fix

  }

}

module.exports = { dashboardPage };