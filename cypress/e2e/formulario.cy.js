/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commands'
import '../support/commandsForm'

const rows = Cypress.env('excelRows') ? JSON.parse(Cypress.env('excelRows')) : [];

describe('Formulário', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Deve validar título do portal', () => {
        cy.title().should('be.equal', 'demosite')
    })

    it('Deve validar a exibição de todos os campos do formulário', () => {
        cy.get(loc.FORMS.TITLE).should('have.text', 'Practice Form')
        cy.get(loc.FORMS.SUBTITLE).should('have.text', 'Student Registration Form')
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
        cy.fixture('formData').then((dados) => {
          const massas = {
            firstName: dados.firstName,
            lastName: dados.lastName,
            email: dados.email,
            gender: dados.gender,
            mobile: dados.mobile,
            dayOfBirth: dados.dayOfBirth,
            monthOfBirth: dados.monthOfBirth,
            yearOfBirth: dados.yearOfBirth,
            subjects: dados.subjects[0],
            hobbies: dados.hobbies[0],
            picture: dados.picture,
            currentAddress: dados.currentAddress,
            state: dados.state[0],
            city: dados.city[0]
          }

          cy.preencherFormulario(massas)
          cy.validarDadosSubmetidos(massas)
      })
    })
})

describe('Formulário XLSX', () => {
  if (!rows.length) {
    it('Nenhuma linha encontrada na planilha', () => {
      cy.log('Sem dados no Excel');
    });
    return;
  }

  rows.forEach((row, idx) => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it(row.CENARIO+` ${idx + 1}`, () => {
      const massas = {
            firstName: row.FIRST_NAME,
            lastName: row.LAST_NAME,
            email: row.EMAIL,
            gender: row.GENDER,
            mobile: row.MOBILE,
            dayOfBirth: row.DAY_OF_BIRTH,
            monthOfBirth: row.MONTH_OF_BIRTH,
            yearOfBirth: row.YEAR_OF_BIRTH,
            subjects: row.SUBJECTS,
            hobbies: row.HOBBIES,
            picture: row.PICTURE,
            currentAddress: row.CURRENT_ADDRESS,
            state: row.STATE,
            city: row.CITY
          }

      cy.preencherFormulario(massas)
      cy.validarDadosSubmetidos(massas)
    });
  });
});