Feature('checkboxes');

Before(({ I }) => {
    I.amOnPage('https://practice.expandtesting.com/checkboxes');
});

Scenario('Checkboxes', async ({ I }) => {
   I.see("Checkboxes");
   I.dontSeeCheckboxIsChecked('Checkbox 1');
   I.seeCheckboxIsChecked('Checkbox 2');
   I.checkOption('Checkbox 1');
   I.seeCheckboxIsChecked('Checkbox 1');
   I.uncheckOption('Checkbox 2');
   I.dontSeeCheckboxIsChecked('Checkbox 2');  
    const checkboxes = await I.grabAttributeFrom('//input[@type="checkbox"]', 'id');
    console.log('Checkboxes:', checkboxes);
});
