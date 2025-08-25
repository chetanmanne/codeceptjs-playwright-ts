import { Page } from "openai/pagination";

Feature('Radio Buttons');

Before(({ I }) => {

  I.amOnPage('https://practice.expandtesting.com/radio-buttons');

});

Scenario('Radio butttons', async ({ I }) => {
  I.see('Select your favorite color:');
  I.seeCheckboxIsChecked('Blue');
  await I.dontSeeCheckboxIsChecked('Red');

  const colors = await I.grabAttributeFrom('//input[@name="color"]', 'value');
  console.log('Colors:', colors);

});

Scenario('Select Radio buttons', async ({ I }) => {
  I.see('Select your favorite sport:');
  I.checkOption('Football');
  await I.seeCheckboxIsChecked('Football');
  await I.dontSeeCheckboxIsChecked('Tennis');

  const sports = await I.grabAttributeFrom('//input[@name="sport"]', 'value');
  console.log('Sports:', sports);
});

Scenario('list of Radio buttons', async ({ I }) => {
 
  const labels = await I.grabTextFromAll('label');
  console.log('Radio labels:', labels);

  // I.seeNumberOfElements('//input[@name="color"]', 5);
  // I.seeNumberOfElements('//input[@name="sport"]', 3);

  // const colors = await I.grabNumberOfVisibleElements('//input[@name="color"]');
  // console.log('Total colors:', colors);
  // const sports = await I.grabNumberOfVisibleElements('//input[@name="sport"]');
  // console.log('Total sports:', sports);
  // console.log(`Colors: ${colors}, Sports: ${sports}`);

});