
const Box1 = require("../fixtures/Task_2/Box1");
const Box2 = require("../fixtures/Task_2/Box2");
const BoxResizeablePage = require("../fixtures/Task_2/BoxResizeablePage");
const HomePage = require("../fixtures/HomePage");
const InteractionPage = require("../fixtures/Task_2/InteractionPage");


describe('Cowlar Task 2', () => {
  it.only('it should Verify SideBar Contains Right Headings and allow Box 1 & 2 to resizing within specified limits', () => {
    HomePage.Valid_Response();
    cy.wait(2000);
    InteractionPage.Navigate_To_Interaction_Card_Button();
    cy.wait(2000);
    InteractionPage.Verify_SideBar_Contains_Right_Headings();
    cy.wait(2000);
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    cy.wait(2000);
    Box1.box1Resizeable();
    cy.wait(2000);
    Box2.box2Resizeable(); 
});

})