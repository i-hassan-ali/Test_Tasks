class Box2 {
    box2Resizeable () {
        cy.get('#resizable').should('exist');
        cy.get('#resizable > .react-resizable-handle').should('exist');

        // Get the initial dimensions of Box 1
        let initialHeight, initialWidth;

        cy.get('#resizable').then(($box) => {
            initialHeight = $box.height();
            initialWidth = $box.width();

            // Log initial dimensions
            cy.log('Initial Dimensions:', initialWidth, initialHeight);

            // Simulate dragging the resizable handle to increase the size
            cy.get('#resizable > .react-resizable-handle')
                .trigger('mousedown', 'bottomRight')
                .trigger('mousemove', { clientX: initialWidth + 500, clientY: initialHeight + 500 })
                .trigger('mouseup', { force: true });
        });

        // Wait for the element to be fully rendered after resizing
        cy.get('#resizable').should('be.visible').then(() => {
            // Use cy.wrap() to properly handle asynchronous behavior
            cy.wrap(null).then(() => {
                // Now, get the updated dimensions of Box 1
                cy.get('#resizable').then(($resizedBox) => {
                    const resizedHeight = $resizedBox.height();
                    const resizedWidth = $resizedBox.width();

                    // Log increased dimensions
                    cy.log('Resized Dimensions:', resizedWidth, resizedHeight);

                    // Assertions for increased dimensions and specified limits
                    expect(resizedHeight).to.be.at.most(300, 'Height');
                    expect(resizedWidth).to.be.at.most(500, 'Width');
                });
            });
        });
    }
}
module.exports = new Box2();