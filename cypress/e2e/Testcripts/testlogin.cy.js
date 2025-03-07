describe('Authentication Flow', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        cy.clearLocalStorage();
    });

    it('should register a new user and redirect to login', () => {
        cy.visit('/register.html');

        // Fill out registration form
        cy.get('[data-cy="register-username"]').type('testuser');
        cy.get('[data-cy="register-email"]').type('test@example.com');
        cy.get('[data-cy="register-password"]').type('password123');

        // Submit form
        cy.get('[data-cy="register-submit"]').click();

        // Verify alert and redirection
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration successful! Please login.');
        });
       // cy.url().should('include', 'register.html');
        cy.wait(4000)
    });

    it('should login with registered user', () => {
        // Pre-register a user
        localStorage.setItem('users', JSON.stringify([{ username: 'testuser', email: 'test@example.com', password: 'password123' }]));

        cy.visit('/login.html');

        // Fill out login form
        cy.get('[data-cy="login-email"]').type('test@example.com');
        cy.get('[data-cy="login-password"]').type('password123');

        // Submit form
        cy.get('[data-cy="login-submit"]').click();

        // Verify successful login alert
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('Welcome back, testuser!');
        //     cy.wait(4000)
        });
    });

    it('should fail login with incorrect credentials', () => {
        cy.visit('/login.html');

        // Fill out login form with wrong credentials
        cy.get('[data-cy="login-email"]').type('test@example.com');
        cy.get('[data-cy="login-password"]').type('wrongpassword');

        // Submit form
        cy.get('[data-cy="login-submit"]').click();

        // Verify failure alert
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('Invalid email or password!');
        //     cy.wait(4000)
        });
   // });

    it('should navigate between register and login pages', () => {
        cy.visit('/login.html');
        cy.get('[data-cy="register-link"]').click();
        cy.url().should('include', 'register.html');

        cy.get('[data-cy="login-link"]').click();
        cy.url().should('include', '/login.html');
        cy.wait(4000)
    });
//});