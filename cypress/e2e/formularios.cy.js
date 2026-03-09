/// <reference types="cypress" />

describe('Formulários', () => {
    it('Deve validar título do portal', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('be.equal', 'demosite')
    })
})