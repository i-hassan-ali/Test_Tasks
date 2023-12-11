
const Box1 = require("../fixtures/Task_2/Box1");
const Box2 = require("../fixtures/Task_2/Box2");
const BoxResizeablePage = require("../fixtures/Task_2/BoxResizeablePage");
const InteractionPage = require("../fixtures/Task_2/InteractionPage");


describe('Cowlar Task 2', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/'); // Go to this URL
  })
  it('it should Verify The SideBar Contains Right Elements', () => {
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Verify_SideBar_Contains_Right_Headings();
  })
  it('it should Navigate To Resizable Tab Under Interaction Section', () => {
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
  })
  it('it should Confirm Box 200 by 200 Size', () => {
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    BoxResizeablePage.Box_Default_Size_200();
  })
  it.only('it should allow Box 1 and box to resizing within specified limits', () => {
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Verify_SideBar_Contains_Right_Headings();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    Box1.box1Resizeable();
    Box2.box2Resizeable();
    
});

})