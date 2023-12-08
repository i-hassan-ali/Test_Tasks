class Interaction_Page {
    elements = {
        Click_On_Interaction_Card_Button : () =>
        cy.get('.category-cards > :nth-child(5)').click({force:true}),
        Contains_Elements_In_SideBar : () =>
        cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text').contains("Elements").should('exist'),
        Contains_Forms_In_SideBar : () =>
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-text').contains("Forms").should('exist'),
        Contains_Alerts_Frame_Windows_In_SideBar : () =>
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').contains("Alerts, Frame & Windows").should('exist'),
        Contains_Widgets_In_SideBar : () =>
        cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-text').contains("Widgets").should('exist'),
        Contains_Interactions_In_SideBar : () =>
        cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-text').contains("Interactions").should('exist'),
        Contains_Book_Store_Application_In_SideBar : () =>
        cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-text').contains('Book Store Application').should('exist'),
        Click_on_Resizable_Tab_Under_Interactions_Section : () =>
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click({force:true}),

    }

    Navigate_To_Interaction_Card_Button () {
        this.elements.Click_On_Interaction_Card_Button();
    }
    Verify_SideBar_Contains_Right_Headings () {
        this.elements.Contains_Elements_In_SideBar();
        this.elements.Contains_Forms_In_SideBar();
        this.elements.Contains_Alerts_Frame_Windows_In_SideBar();
        this.elements.Contains_Widgets_In_SideBar();
        this.elements.Contains_Interactions_In_SideBar();
        this.elements.Contains_Book_Store_Application_In_SideBar();
    }
    
    Navigate_To_Resizable_Tab_Under_Interaction_Section() {
        this.elements.Click_on_Resizable_Tab_Under_Interactions_Section();
    }


}
module.exports = new Interaction_Page();