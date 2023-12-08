class BookStore {
    elements = {
        Click_on_Book_Store_Application_Button : () => 
        cy.get('.category-cards > :nth-child(6)').click({force:true}),
        Click_on_the_Book_named_Understanding_ECMAScript_6 : () => 
        cy.contains('Understanding ECMAScript 6').click({force:true}),
        Intercept_Api_With_Get : () =>
        cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('getBookRequest'),
        Visit_Page_Where_The_API_Request_is_triggered : () =>
        cy.visit('https://demoqa.com/books?book=9781593277574'),
        Intercept_Api_And_Verify_Response : () =>
        cy.wait('@getBookRequest').then((interception) => {
            // Verify the response
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body).to.deep.equal({
                "isbn": "9781593277574",
                "title": "Understanding ECMAScript 6",
                "subTitle": "The Definitive Guide for JavaScript Developers",
                "author": "Nicholas C. Zakas",
                "publish_date": "2016-09-03T00:00:00.000Z",
                "publisher": "No Starch Press",
                "pages": 352,
                "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
                "website": "https://leanpub.com/understandinges6/read"
            });
        }),
    }
    Book_Store_Application_Button () {
        this.elements.Click_on_Book_Store_Application_Button();
        cy.wait(1000);
    }
    Book_named_Understanding_ECMAScript_6 () {
        this.elements.Click_on_the_Book_named_Understanding_ECMAScript_6();
        cy.wait(1000);
    }
    Api_Inception_And_Verify_Response () {
        this.elements.Intercept_Api_With_Get();
        this.elements.Visit_Page_Where_The_API_Request_is_triggered();
        this.elements.Intercept_Api_And_Verify_Response();
        
    }
}
module.exports = new BookStore();