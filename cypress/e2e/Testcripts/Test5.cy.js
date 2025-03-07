describe('upload file', function (){

    it('Upload file', function (){
//VARUN IS UPLOADING FILES
        const filepath='pic1.png';
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(2000)
        cy.get('#file-upload').attachFile(filepath);
        cy.wait(2000)
        cy.get('#file-submit').click();
        cy.wait(2000)
        cy.get('#uploaded-files').contains("pic1.png")

    })
}) 
  