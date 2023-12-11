
const HomePage = require("../fixtures/HomePage");
const form = require("../fixtures/Task_1/form");


describe('Cowlar Task 1', () => {
  it('it should Fill Practice Form and Hit Submit Button', () => {
    HomePage.Valid_Response();
    cy.wait(2000);
    form.form_Page();
    cy.wait(2000);
    form.Practice_Button();
    cy.wait(2000);
    form.Fill_Data_In_Practice_Form();
  })
})