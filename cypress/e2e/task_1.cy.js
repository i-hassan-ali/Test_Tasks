

const form = require("../fixtures/Task_1/form");


describe('Cowlar Task 1', () => {
  it('it should Fill Practice Form and Hit Submit Button', () => {
    cy.visit('https://demoqa.com/');
    form.form_Page();
    form.Practice_Button();
    form.Fill_Data_In_Practice_Form();
  })
})