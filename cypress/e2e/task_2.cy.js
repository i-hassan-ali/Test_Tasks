
const Box1 = require("../fixtures/Task_2/Box1");
const Box2 = require("../fixtures/Task_2/Box2");
const BoxResizeablePage = require("../fixtures/Task_2/BoxResizeablePage");
const HomePage = require("../fixtures/HomePage");
const InteractionPage = require("../fixtures/Task_2/InteractionPage");


describe('Cowlar Task 2', () => {
  it('it should visit Home Page and Check Valid Responce', () => {
    HomePage.Valid_Response();
  })
  it('it should Navigate To Interaction Card Button', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
  })
  it('it should Verify The SideBar Contains Right Elements', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Verify_SideBar_Contains_Right_Headings();
  })
  it('it should Navigate To Resizable Tab Under Interaction Section', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
  })
  it('it should Confirm Box 200 by 200 Size', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    BoxResizeablePage.Box_Default_Size_200();
  })
  it('it should allow Box 1 to resizing within specified limits', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    Box1.box1Resizeable();
    
});
 it('it should allow Box 2 for resizing', () => {
    HomePage.Valid_Response();
    InteractionPage.Navigate_To_Interaction_Card_Button();
    InteractionPage.Navigate_To_Resizable_Tab_Under_Interaction_Section();
    Box2.box2Resizeable();
    });

})