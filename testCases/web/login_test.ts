Feature('southwest search');

Before (({ I }) => {
    I.amOnPage('/');

});

Scenario('search for southwest', async ({ I }) => {
  //pause();
  I.wait(3);
  I.click("//div[@class='onTopAndVisible__jrglp'][normalize-space()='Vacations']");
  I.waitForElement("//div[contains(text(),'Find a vacation')]");
  I.see('Promo code', 'label[for="promoCode"]');

});
