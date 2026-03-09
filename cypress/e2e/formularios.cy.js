/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commands'

describe('Formulários', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })

    it('Deve validar título do portal', () => {
        cy.title().should('be.equal', 'demosite')
    })

    it('Deve validar título do formulário', () => {
        cy.get(loc.MENU.FORMS).click();
        cy.xpath(loc.MENU_FORMS.ROUTER_LINK).click()
        cy.get('h1.text-center').should('have.text', 'Practice Form')
    })

    it('Deve validar subtítulo do formulário', () => {
        cy.get(loc.MENU.FORMS).click();
        cy.xpath(loc.MENU_FORMS.ROUTER_LINK).click()
        cy.xpath("//h5[text()='Student Registration Form']").should('have.text', 'Student Registration Form')
    })
})