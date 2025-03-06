describe("Canvas", () => {

    beforeEach(() => {
      cy.visit('https://kitchen.applitools.com/ingredients/canvas');
    });
  
    it('should click a button on a canvas', () => {
      cy.get('#burger_canvas').then($canvas => {
  
        const canvasWidth = $canvas.width();
        const canvasHeight = $canvas.height();
  
        const canvasCenterX = canvasWidth / 2;
        const canvasCenterY = canvasHeight / 2;
  
        const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
        const buttonY = canvasCenterY + ( ( canvasCenterY / 3 ) * 2 );
  cy.wait(2000)
        cy.wrap($canvas)
        .scrollIntoView()
        .click(buttonX,buttonY)
         });
  
        //  cy.eyesOpen({ testName: 'Burger on Canvas' });
        //  cy.eyesCheckWindow();
        //  cy.eyesClose();
     
        });
  });