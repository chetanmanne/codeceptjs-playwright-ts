import { assert } from "console";

Feature('JSONPlaceholder Todos');

Scenario('GET /todos/1 and validate response', async ({ I }) => {
 
  // Send a GET request to the API endpoint https://jsonplaceholder.typicode.com
  const response = await I.sendGetRequest('/todos/1');

  // Validate the response  
  I.seeResponseCodeIs(200);
  
  I.dontSeeResponseCodeIs(401,"Unauthorized");
  I.dontSeeResponseCodeIs(500,"Internal Server Error");
  I.dontSeeResponseCodeIs(206,404);
  
  I.seeResponseContainsJson({
    id: 1,
    userId: 1,
    title: 'delectus aut autem',
    completed: false,
  });

  I.dontSeeResponseContainsJson({
    id: 2,
    userId: 2,
    email:'cmanne@gmail.com',
  });

  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['id', 'userId', 'title', 'completed']);

  I.seeResponseEquals({"userId": 1, "id": 1 , "title": "delectus aut autem", "completed": false});


  // I.seeResponseMatchesJsonSchema(joi => {
  //   return joi.object({
  //     id: joi.number().integer().required(),
  //     userId: joi.number().integer().required(),
  //     title: joi.string().required(),
  //     completed: joi.boolean().required(),
  //   })
  // }); 
  
  
});
