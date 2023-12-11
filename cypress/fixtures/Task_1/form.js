class formPage{
    elements = {
        Click_On_Forms_Button : () => 
        cy.get(':nth-child(2) > :nth-child(1) > .card-body').click(),
        Click_On_Practice_Form_Button : () => 
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click(),
        Enter_FirstName : () => 
        cy.get('#firstName'),
        Enter_LastName : () => 
        cy.get('#lastName'),
        Enter_UserEmail : () => 
        cy.get('#userEmail'),
        Click_On_Gender_Radio_Button : () =>
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click(),
        Enter_MobileNumber : () =>
        cy.get('#userNumber'),
        Click_On_Date_Of_Birth_Calander: () => 
        cy.get('#dateOfBirthInput').click(),
        Click_On_Any_Date : () => 
        cy.get(':nth-child(2) > .react-datepicker__day--005').click(),
        Enter_Subject : () =>
        cy.get('.subjects-auto-complete__value-container'),
        Enter_Subject_Input : () =>
        cy.get('#react-select-2-option-0').click(),
        Click_On_Hobbies_Radio_Button : () => 
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click(),
        Select_Image : () =>
        cy.get('input[type="file"]').eq(0).attachFile('Task_1/image1.jpg', { subjectType: 'input' }),
        Enter_Address: () => 
        cy.get('#currentAddress'),
        Select_State : () => 
        cy.contains("Select State").click(),
        Select_First_State : () =>
        cy.get('#react-select-3-option-0').click(),
        Select_City : () => 
        cy.contains("Select City").click(),
        Select_First_City: () =>
        cy.get('#react-select-4-option-0').click(),
        Enter_Submit : () => 
        cy.get('#submit').click(),
        Enter_Close : () => 
        cy.get('#closeLargeModal').click(),
    };

    form_Page () {
        this.elements.Click_On_Forms_Button();
    }
    Practice_Button () {
        this.elements.Click_On_Practice_Form_Button();
    }
    Fill_Data_In_Practice_Form () {
        this.elements.Enter_FirstName().type("Cowlar");
        this.elements.Enter_LastName().type("Developer");
        this.elements.Enter_UserEmail().type("qaengineer@cowlar.com");
        this.elements.Click_On_Gender_Radio_Button();
        this.elements.Enter_MobileNumber().type("0123456789");
        this.elements.Click_On_Date_Of_Birth_Calander();
        this.elements.Click_On_Any_Date();
        this.elements.Enter_Subject().type("Computer Science");
        this.elements.Enter_Subject_Input();
        this.elements.Click_On_Hobbies_Radio_Button();
        this.elements.Select_Image();
        this.elements.Enter_Address().type("Address 1");
        this.elements.Select_State();
        this.elements.Select_First_State();
        this.elements.Select_City();
        this.elements.Select_First_City();
        this.elements.Enter_Submit();
        cy.wait(15000);
        this.elements.Enter_Close();
        
    }
}
module.exports = new formPage();