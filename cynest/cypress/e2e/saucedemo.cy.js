/// <reference types="cypress" />

describe('Zero Webappsecurity Test', () => {

    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
        cy.get('.brand').should('have.text', 'Zero Bank')
    });

    it('As a user, I will able to visit the website',()=> {
        cy.get('#signin_button').click()
        cy.get('h3').should('be.visible')
    });

    it('Ensure that user will get error message if entered invalid username or password', () => {
        cy.get('#user_login').type('user_login')
        cy.get('#user_password').type('password')
        cy.get('[name="submit"]').click()
        cy.get('.alert').should('contain.text','Login and/or password are wrong')
    });

    it('Ensure that user be able to successfully logged in to the website', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('[value="Sign in"]').click()
        cy.get('#account_summary_tab').should('be.visible')

        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId"]').select('2')
        cy.get('#tf_amount"]').type('5000')
    });

    // it('Ensure that user be able to Transfer Funds', () => {
    //     cy.get('#transfer_funds_tab').click()
    //     cy.get('#tf_fromAccountId"]').select('2')
    //     cy.get('#tf_amount"]').type('5000')
    //     // cy.get('#tf_fromAccountId').click()
    //     // cy.get('[value="Savings(Avail. balance = $ 1000)"]').click()
        
    // });

});