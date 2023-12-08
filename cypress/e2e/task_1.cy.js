
const HomePage = require("../fixtures/HomePage");
const form = require("../fixtures/Task_1/form");


describe('Cowlar Task 1', () => {
  it('it should visit Home Page and Check Valid Responce', () => {
    HomePage.Valid_Response();
  })
  it('it should Click Form Button and Go To Form Page', () => {
    HomePage.Valid_Response();
    form.form_Page();
  })
  it('it should Click Practice Form and Go To Practice Form Page', () => {
    HomePage.Valid_Response();
    form.form_Page();
    form.Practice_Button();
  })

  it.only('it should Fill Practice Form and Hit Submit Button', () => {
    HomePage.Valid_Response();
    form.form_Page();
    form.Practice_Button();
    form.Fill_Data_In_Practice_Form();
  })
})