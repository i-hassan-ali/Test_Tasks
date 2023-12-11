const HomePage = require("../fixtures/HomePage");
const BookStore = require("../fixtures/Task_3/BookStorePage");

describe('Cowlar Task 3', () => {
    it('it should Click on Book Store Application Button and Book Store Page should be displayed', () => {
        HomePage.Valid_Response();
        cy.wait(2000);
        BookStore.Book_Store_Application_Button();
        cy.wait(2000);
        BookStore.Book_named_Understanding_ECMAScript_6();
        cy.wait(2000);
      })
      it('should intercept and verify the response for a specific API request', () => {
        BookStore.Api_Inception_And_Verify_Response();
    });
  })