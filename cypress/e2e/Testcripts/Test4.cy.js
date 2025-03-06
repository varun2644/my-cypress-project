describe('Add Numbers Test', () => {
    it('should add two numbers and display the result part1', () => {
        cy.visit('twonum.html');

        // cy.get('#textbox1').type('5');
        // cy.get('#textbox2').type('10');
        // cy.get('#addButton').click();
        // cy.get('#result').should('have.value', '15');


        cy.fixture('Addnum.json').then((data)=>{
            data.forEach((e) =>{
                cy.log(e)
                cy.getDataTest('tb1').type(e.tb1);
                cy.getDataTest('tb2').type(e.tb2);
                cy.getDataTest('ADD').click();
                cy.getDataTest('tb3').should('have.value',e.expected)
                cy.wait(4000)
                cy.getDataTest('tb1').clear()
                cy.getDataTest('tb2').clear()
                cy.getDataTest('tb3').clear({force:true})
            })

           
            
            })
            // cy.getDataTest('tb1').type(data.tb1);
            // cy.getDataTest('tb2').type(data.tb2);
            // cy.getDataTest('ADD').click();
            // cy.getDataTest('tb3').should('have.value','13')
            // cy.wait(3000)

    //     })
        

    });
});
