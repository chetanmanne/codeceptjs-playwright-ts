Feature('Browser & Navigation');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Verify title of Any website', async ({ I }) => {
    I.seeInTitle('Southwest Airlines');
    I.seeInCurrentUrl('southwest.com');

});

Scenario('header nav + back and forward', async ({ I }) => {
    I.click('//a[normalize-space()="Manage trip"]');
    I.see('Lookup reservation');

    await I.usePlaywrightTo('go back', async ({ page }) => {
        await page.goBack();
    });
    I.see('Search flights');

    await I.usePlaywrightTo('go forward', async ({ page }) => {
        await page.goForward();
    });
    I.see('Lookup reservation');

});

Scenario('refresh page', async ({ I }) => {

    I.click("(//a[normalize-space()='Check in'])[1]");
    I.see('Check in for your flight');
    I.refreshPage();
    I.see('Check in for your flight');

});

Scenario('footer nav', async ({ I }) => {
    I.scrollPageToBottom();
    I.click(locate('a').withText('Airport Information'));
    I.seeInCurrentUrl('GFOOTER-FLY-AIRPORTINFO');

});

Scenario('validate navigattion opening new tab', async ({ I }) => {
    I.scrollPageToBottom();
    I.click(locate('a').withText('Careers'));

    I.switchToNextTab();
    I.see('Search jobs');

    await I.closeCurrentTab();
   // await I.switchToPreviousTab();
    I.scrollPageToTop();
    I.see('Search flights');

});