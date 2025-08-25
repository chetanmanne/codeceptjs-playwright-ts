Feature('dropdown feature');


Before(({ I }) => {
    I.amOnPage('https://practice.expandtesting.com/dropdown');
});

Scenario('Simple dropdown — select by text and value', async ({ I }) => {
    await I.selectOption('#dropdown', 'Option 2');
    const value = await I.grabValueFrom('#dropdown');
    console.log(value);
});

Scenario('Elements dropdowns', async ({ I }) => {
    await I.selectOption('#elementsPerPageSelect', '50');
    const value = await I.grabValueFrom('#elementsPerPageSelect');
    console.log(value);
});

Scenario('country dropdown', async ({ I }) => {
    await I.selectOption('#country', 'India');
    const value = await I.grabValueFrom('#country');
    console.log(value);
});

Scenario('list of values in dropdown', async ({ I }) => {


    const texts = await I.grabTextFromAll('#dropdown');
    console.log('All option texts:', texts);

    const values = await I.grabAttributeFromAll('//*[@id="elementsPerPageSelect"]/option', 'value');
    console.log('All option values:', values);


});


