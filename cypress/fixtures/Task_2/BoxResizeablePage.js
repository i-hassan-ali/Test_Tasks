

class ResizableBox {
    elements = {
        
        Confirm_Box_Default_Size_200 : () =>
        
        cy.get('#resizableBoxWithRestriction').should(($box) => {
            let height = $box.height();
            let width = $box.width();
      
            expect(height).to.equal(200, 'Height is not as expected');
            expect(width).to.equal(200, 'Width is not as expected');
          }),
    }

    Box_Default_Size_200() {
        this.elements.Confirm_Box_Default_Size_200();
    }
}
module.exports = new ResizableBox();