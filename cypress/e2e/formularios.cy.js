/// <reference types="cypress" />

describe('Formulários Demosite', () => {
    it('Deve preencher os campos de texto', () => {
        cy.visit('https://demoqa.com/')

        cy.title().should('be.equal', 'demosite')
    })
})