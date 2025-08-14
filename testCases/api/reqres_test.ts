Feature('ReqRes /api/users');

Scenario('GET /api/users?page=1 — validate list & user fields', async ({ I }) => { 
    
    // Send a GET request to the API endpoint https://reqres.in/api/users
  const response = await I.sendGetRequest('https://reqres.in/api/users');

  // Validate the response  
  I.seeResponseCodeIs(200);
  
  I.dontSeeResponseCodeIs(401, "Unauthorized");
  I.dontSeeResponseCodeIs(500, "Internal Server Error");
  I.dontSeeResponseCodeIs(206, 404);

  I.seeResponseContainsJson({
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2
  });

  I.seeResponseContainsJson({
    data: [
        {id: 1,email: "george.bluth@reqres.in",first_name: "George",last_name: "Bluth",avatar: "https://reqres.in/img/faces/1-image.jpg"}
    ]
    });

    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsKeys(['page', 'per_page', 'total', 'total_pages', 'data']);

  I.seeResponseContainsJson({
    "support": {
        "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
    }

    });

});
