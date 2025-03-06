describe('Form Tests', () => {
    beforeEach(()  =>{
        cy.visit('/forms')
}) 
it('Test Subscribe form', () =>{
    cy.contains(/Testing Forms/i).should('exist') 
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('varunsrinivasan.com')
    //cy.getDataTest('subscribe-form').find('input').type('varunsrinivasan.com')
    cy.contains(/Successfully subbed: varunsrinivasan.com!/i).should('not.exist')
    cy.wait(4000)
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: varunsrinivasan.com!/i).should('exist')
    cy.wait(2000)
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: varunsrinivasan!/i).should('not.exist')
    cy.wait(2000)
    cy.contains(/invalid email: varunsrinivasan!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    
})
}) 