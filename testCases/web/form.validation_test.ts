import { waitForClickable } from "webdriverio/build/commands/element";

Feature('Form Validation Feature')

Before(({ I }) => {
    I.amOnPage('https://practice.expandtesting.com/form-validation');
});

Scenario('New Form Registration', async ({ I }) => {

    I.fillField("(//input[@id='validationCustom01'])[1]", 'Chetan');
    I.fillField("(//input[@id='validationCustom05'])[1]", '225-1234567');

    await I.fillField("(//input[@id='validationCustom05'])[2]", '08/24/2025');

    const val = await I.grabValueFrom("(//input[@id='validationCustom05'])[2]");
    console.log('Picked date:', val);

    I.selectOption('payment', 'card');
    I.click("Register");
    I.wait(2);
    I.see("Thank you for validating your ticket");

});

Scenario.only('shows validation errors when all fields are empty', async ({ I }) => {

    I.clearField("(//input[@id='validationCustom01'])[1]");
    await I.click('Register');
    I.wait(2);
    await I.see('Please enter your Contact name.');
    I.see('Please provide your Contact number.');
    I.see('Please provide valid Date.');
    I.see('Please select the Paymeny Method.');
});