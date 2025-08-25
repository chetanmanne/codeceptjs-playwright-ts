Feature('Redirect links - Status Codes')

Before(({ I }) => {
    I.amOnPage('https://practice.expandtesting.com/status-codes');
});

Scenario('Redirection', async ({ I }) => {

    I.click(locate('a').withText('here'));
    await I.click('200');
    await I.see('This page returned a 200 status code');
    I.click(locate('a').withText('here'));

});