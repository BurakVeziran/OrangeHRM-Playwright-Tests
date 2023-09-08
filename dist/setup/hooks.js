"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = exports.browser = void 0;
const playwright = require('playwright');
const { BeforeAll, Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const cucumber = require('@cucumber/cucumber');
const options = {
    headless: true,
    slowMo: 100
};
BeforeAll(async () => {
    console.log('before all ...');
    global.browser = await playwright['chromium'].launch(options);
});
AfterAll(async () => {
    console.log('after all ...');
    await global.browser.close();
});
Before(async () => {
    console.log('before ...');
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});
After(async () => {
    console.log('after pass...');
    await global.page.close();
    await global.context.close();
});
After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        var buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true });
        this.attach(buffer, 'image/png');
    }
});
