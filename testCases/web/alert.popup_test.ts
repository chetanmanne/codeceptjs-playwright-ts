import { Page } from "openai/pagination";

Feature("Alert & Popup");

Before(({ I }) => {
  I.amOnPage("https://practice.expandtesting.com/js-dialogs");
  I.see("JavaScript Dialogs page for Automation Testing Practice");
});


Scenario('Handle alert popup Ok', async ({ I }) => {

  I.click("(//button[@id='js-alert'])[1]");
  await I.acceptNextDialog();
  await I.see('Dialog Response: OK');
});


Scenario('Hanlde alert popup Cancel', async ({ I }) => {

  I.click("(//button[@id='js-confirm'])[1]");
  await I.dismissNextDialog();
  await I.see('Dialog Response: Cancel');
});


Scenario('Handle alert popup with text', async ({ I }) => {

  I.click("(//button[@id='js-prompt'])[1]");
  await I.answerNextPrompt('Chetan Manne');
  await I.see('Dialog Response: Chetan Manne');
});
