/// <reference types="cypress" />

describe('Formulários Demosite', () => {
    it('Deve validar título do portal', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('be.equal', 'demosite')
    })
})