Feature('Tolltips feature')

Before(({ I }) => {
    I.amOnPage('https://practice.expandtesting.com/tooltips');
});

Scenario('verify tooltip on hover', async ({ I }) => {

    // Hover the button
    I.moveCursorTo('text=Tooltip on top');

    // Check tooltip text is visible
    I.see('Tooltip on top');
});

