class Box1  {
    box1Resizeable () {
    cy.get('#resizableBoxWithRestriction').should('exist');
    cy.get('#resizableBoxWithRestriction > .react-resizable-handle').should('exist');

        // Get the initial dimensions of Box 1
        let initialHeight, initialWidth;

        cy.get('#resizableBoxWithRestriction').then(($box) => {
            initialHeight = $box.height();
            initialWidth = $box.width();

            // Log initial dimensions
            cy.log('Initial Dimensions:', initialWidth, initialHeight);

            // Simulate dragging the resizable handle to increase the size
            cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
                .trigger('mousedown', 'bottomRight')
                .trigger('mousemove', { clientX: initialWidth + 825, clientY: initialHeight + 425 })
                .trigger('mouseup', { force: true });
        });

        // Wait for the element to be fully rendered after resizing
        cy.get('#resizableBoxWithRestriction').should('be.visible').then(() => {
            // Use cy.wrap() to properly handle asynchronous behavior
            cy.wrap(null).then(() => {
                // Now, get the updated dimensions of Box 1
                cy.get('#resizableBoxWithRestriction').then(($resizedBox) => {
                    const resizedHeight = $resizedBox.height();
                    const resizedWidth = $resizedBox.width();

                    // Log increased dimensions
                    cy.log('Resized Dimensions:', resizedWidth, resizedHeight);

                    // Assertions for increased dimensions and specified limits
                    expect(resizedHeight).to.be.greaterThan(initialHeight, 'Height has not increased');
                    expect(resizedWidth).to.be.greaterThan(initialWidth, 'Width has not increased');
                    expect(resizedHeight).to.be.at.most(300, 'Height exceeds maximum limit');
                    expect(resizedWidth).to.be.at.most(500, 'Width exceeds maximum limit');
                    expect(resizedHeight).to.be.at.least(150, 'Height is less than the minimum');
                    expect(resizedWidth).to.be.at.least(150, 'Width is less than the minimum');
                });
            });
        });
    }
}
module.exports = new Box1();