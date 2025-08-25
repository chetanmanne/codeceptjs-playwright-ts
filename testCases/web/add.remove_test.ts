Feature('Add/remove Elements');

Before(({ I }) => {

  I.amOnPage('https://practice.expandtesting.com/add-remove-elements');

}); 

Scenario('Add/Remove Elements', async ({ I }) => {
  I.see('Add/Remove Elements');
  I.see('Add/Remove Elements page for Automation Testing Practice');
  I.dontSeeElement('//button[text()="Delete"]');

  I.click('Add Element');
  I.seeElement('//button[text()="Delete"]');

  I.click('Add Element');
  I.click('Add Element');
  I.seeNumberOfElements('//button[text()="Delete"]', 3);

  I.click('(//button[text()="Delete"])[1]');
  I.seeNumberOfElements('//button[text()="Delete"]', 2);

  const buttons = await I.grabTextFromAll('//button[text()="Delete"]');
  console.log('Delete Buttons:', buttons);

});