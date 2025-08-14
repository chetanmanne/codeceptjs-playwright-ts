Feature('southwest search');

Scenario('search for southwest', async ({ I }) => {
  // Goes to follow link because base url will be set in config
  I.amOnPage('/');
 // pause();
  // Give time for modals to appear
  I.wait(3);


  // click on "Vacations" link
  I.click("//div[@class='onTopAndVisible__jrglp'][normalize-space()='Vacations']");


  // Wait for products to show up
  I.waitForElement("//div[contains(text(),'Find a vacation')]");

  // Verify "Promo code"
  I.see('Promo code', 'label[for="promoCode"]');
 
});
