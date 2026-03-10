/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commands'

describe('Formulários', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Deve validar título do portal', () => {
        cy.title().should('be.equal', 'demosite')
    })

    it('Deve validar título do formulário', () => {
        cy.get(loc.FORMS.TITLE).should('have.text', 'Practice Form')
    })

    it('Deve validar subtítulo do formulário', () => {
        cy.get(loc.FORMS.SUBTITLE).should('have.text', 'Student Registration Form')
    })

    it('Deve validar a exibição de todos os campos do formulário', () => {
        cy.get(loc.FORMS.FIRST_NAME).should('be.visible')
        cy.get(loc.FORMS.LAST_NAME).should('be.visible')
        cy.get(loc.FORMS.EMAIL).should('be.visible')
        cy.get(loc.FORMS.GENDER).should('be.visible')
        cy.get(loc.FORMS.MOBILE).should('be.visible')
        cy.get(loc.FORMS.DATE_OF_BIRTH).should('be.visible')
        cy.get(loc.FORMS.SUBJECTS).should('be.visible')
        cy.get(loc.FORMS.HOBBIES).should('be.visible')
        cy.get(loc.FORMS.PICTURE).should('be.visible')
        cy.get(loc.FORMS.CURRENT_ADDRESS).should('be.visible')
        cy.get(loc.FORMS.STATE).should('be.visible')
        cy.get(loc.FORMS.CITY).should('be.visible')
        cy.get(loc.FORMS.SUBMIT).should('be.visible')
    }) 

    it('Deve preencher o formulário com sucesso', () => {
        cy.preencherFormulario()
        //cy.validarDadosSubmetidos()
    })
})