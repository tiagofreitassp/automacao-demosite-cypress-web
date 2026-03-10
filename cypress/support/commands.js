// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('acessarMenuForms', () => {
    cy.get(loc.MENU.FORMS).click()
    cy.get(loc.MENU_FORMS.ROUTER_LINK).click()
})

Cypress.Commands.add('preencherFormulario', () => {
    cy.get(loc.FORMS.FIRST_NAME).type('John')
    cy.get(loc.FORMS.LAST_NAME).type('Doe')
    cy.get(loc.FORMS.EMAIL).type('john.doe@example.com')
    cy.escolherGenero('Masculino')
    cy.get(loc.FORMS.MOBILE).type('1234567890')
    cy.inserirDataDeAniversario('15', 'May', '1990')
    cy.get(loc.FORMS.SUBJECTS).type('Maths{enter}')
    cy.get(loc.FORMS.HOBBIES).contains('Sports').click()
    //cy.get(loc.FORMS.PICTURE).attachFile('example.jpg')//verificar qual a função correta para upload de arquivos
    cy.get(loc.FORMS.CURRENT_ADDRESS).type('123 Main St, Anytown, USA')
    cy.get(loc.FORMS.STATE).click().get('#react-select-3-option-0').click()
    cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-0').click()
    cy.get(loc.FORMS.SUBMIT).click()
})

Cypress.Commands.add('validarDadosSubmetidos', () => {
    cy.get('.modal-content').should('be.visible')
    cy.get('.modal-header').should('have.text', 'Thanks for submitting the form')
    cy.get('.table-responsive').should('contain', 'John Doe')
    cy.get('.table-responsive').should('contain', 'john.doe@example.com')
    cy.get('.table-responsive').should('contain', 'Male')
    cy.get('.table-responsive').should('contain', '1234567890')
    cy.get('.table-responsive').should('contain', '15 May,1990')
    cy.get('.table-responsive').should('contain', 'Maths')
    cy.get('.table-responsive').should('contain', 'Sports')
    cy.get('.table-responsive').should('contain', 'example.jpg')
    cy.get('.table-responsive').should('contain', '123 Main St, Anytown, USA')
    cy.get('.table-responsive').should('contain', 'NCR Delhi')
})

Cypress.Commands.add('escolherGenero', (genero) => {
    if (genero === 'Masculino') {
        cy.get('#gender-radio-1').click()
    } else if (genero === 'Feminino') {
        cy.get('#gender-radio-2').click()
    } else if (genero === 'Outro') {
        cy.get('#gender-radio-3').click()
    }
})

Cypress.Commands.add('inserirDataDeAniversario', (dia,mes,ano) => {
    cy.get(loc.FORMS.DATE_OF_BIRTH).click()
    cy.get('.react-datepicker__month-select').select(mes)
    cy.get('.react-datepicker__year-select').select(ano)
    cy.get('.react-datepicker__day--0' + dia).click()
})