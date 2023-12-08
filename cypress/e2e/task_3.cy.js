const HomePage = require("../fixtures/HomePage");
const BookStore = require("../fixtures/Task_3/BookStorePage");

describe('Cowlar Task 3', () => {
    it('it should visit Home Page and Check Valid Responce', () => {
      HomePage.Valid_Response();
    })
    it('it should Click on Book Store Application Button and Book Store Page should be displayed', () => {
        HomePage.Valid_Response();
        BookStore.Book_Store_Application_Button();
      })
    it('it should Click on Book Store Application Button and Book Store Page should be displayed', () => {
        HomePage.Valid_Response();
        BookStore.Book_Store_Application_Button();
        BookStore.Book_named_Understanding_ECMAScript_6();
      })
      it.only('should intercept and verify the response for a specific API request', () => {
        BookStore.Api_Inception_And_Verify_Response();
    });
  })