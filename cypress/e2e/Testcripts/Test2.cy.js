describe('Login and Registration Tests', () => {
      // Test for user login
    it('Login with valid username and password', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
      
      // Fill in the login form (adjust selectors based on the actual HTML structure)
      cy.get('input[name="username"]').type('Admin'); 
      cy.get('input[name="password"]').type('admin123');
      
      // Click the "Login" button
      cy.get('button[type="submit"]').contains('Login').click(); // Click login button
      
      cy.url().should('include', '/dashboard'); 
      cy.contains('Dashboard').should('be.visible'); 
    });

    it('login with wrong username and password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
        cy.get('input[name="username"]').type('Admin123'); 
        cy.get('input[name="password"]').type('admin123');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-alert').should('be.visible'); 
      });

      it('login with username and wrong password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
        cy.get('input[name="username"]').type('Admin123'); 
        cy.get('input[name="password"]').type('admin1234');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-alert').should('be.visible'); 
      });

      it('login with wrong username and wrong password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
        cy.get('input[name="username"]').type('Admin1234'); 
        cy.get('input[name="password"]').type('admin1234');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-alert').should('be.visible'); 
      });

      it('login with empty username and empty password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
        // cy.get('input[name="username"]').type('Admin1234'); 
        // cy.get('input[name="password"]').type('admin1234');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-sheet').should('be.visible'); 
      });

      it('login with empty username and password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
        // cy.get('input[name="username"]').type('Admin1234'); 
         cy.get('input[name="password"]').type('admin1234');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-sheet').should('be.visible'); 
      });

      it('login with username and empty password', () => {
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Visiting the login page URL provided
        
        // Fill in the login form (adjust selectors based on the actual HTML structure)
         cy.get('input[name="username"]').type('Admin'); 
        //cy.get('input[name="password"]').type('admin1234');
        
        // Click the "Login" button
        cy.get('button[type="submit"]').contains('Login').click(); // Click login button
        
        // cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-sheet').should('be.visible'); 
      });

  });
  


