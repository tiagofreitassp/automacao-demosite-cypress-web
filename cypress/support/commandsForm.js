import loc from './locators'

Cypress.Commands.add('preencherFormulario', (massas) => {
    cy.get(loc.FORMS.FIRST_NAME).type(massas.firstName)
    cy.get(loc.FORMS.LAST_NAME).type(massas.lastName)
    cy.get(loc.FORMS.EMAIL).type(massas.email)
    cy.escolherGenero(massas.gender)
    cy.get(loc.FORMS.MOBILE).type(massas.mobile)
    cy.inserirDataDeAniversario(massas.dayOfBirth, massas.monthOfBirth, massas.yearOfBirth)
    cy.get(loc.FORMS.SUBJECTS).type(massas.subjects+'{enter}')
    cy.escolherHobbie(massas.hobbies)
    //cy.get(loc.FORMS.PICTURE).attachFile(massas.picture)//verificar qual a função correta para upload de arquivos
    cy.get(loc.FORMS.CURRENT_ADDRESS).type(massas.currentAddress)
    cy.escolherEstado(massas.state)
    cy.escolherCidade(massas.city)
    cy.get(loc.FORMS.SUBMIT).click()
})

Cypress.Commands.add('validarDadosSubmetidos', (massas) => {
    cy.get('.modal-content').should('be.visible')
    cy.get('.modal-header').should('have.text', 'Thanks for submitting the form')
    cy.get('.table-responsive > table > thead > tr > th:nth-child(1)').should('have.text', 'Label')
    cy.get('.table-responsive > table > thead > tr > th:nth-child(2)').should('have.text', 'Values')

    cy.validarDadosColunaLabel()
    cy.validarDadosColunaValues(massas)

    cy.get('#closeLargeModal').should('be.visible')
})

Cypress.Commands.add('validarDadosColunaLabel', () => {
    const colunaLabel = '.table-responsive > table > tbody > tr > td:nth-child(1)'
    cy.get(colunaLabel).should('contain', 'Student Name')
    cy.get(colunaLabel).should('contain', 'Student Email')
    cy.get(colunaLabel).should('contain', 'Gender')
    cy.get(colunaLabel).should('contain', 'Mobile')
    cy.get(colunaLabel).should('contain', 'Date of Birth')
    cy.get(colunaLabel).should('contain', 'Subjects')
    cy.get(colunaLabel).should('contain', 'Hobbies')
    cy.get(colunaLabel).should('contain', 'Picture')
    cy.get(colunaLabel).should('contain', 'Address')
    cy.get(colunaLabel).should('contain', 'State and City')
})

Cypress.Commands.add('validarDadosColunaValues', (massas) => {
    const colunaValues = '.table-responsive > table > tbody > tr > td:nth-child(2)'
    cy.get(colunaValues).should('contain', massas.firstName + ' ' + massas.lastName)
    cy.get(colunaValues).should('contain', massas.email)
    cy.get(colunaValues).should('contain', massas.gender)
    cy.get(colunaValues).should('contain', massas.mobile)
    cy.get(colunaValues).should('contain', massas.dayOfBirth + ' ' + massas.monthOfBirth + ',' + massas.yearOfBirth)
    cy.get(colunaValues).should('contain', massas.subjects)
    cy.get(colunaValues).should('contain', massas.hobbies)
    //cy.get(colunaValues).should('contain', massas.picture)
    cy.get(colunaValues).should('contain', massas.currentAddress)
    cy.get(colunaValues).should('contain', massas.state + ' ' + massas.city)
})

Cypress.Commands.add('escolherGenero', (genero) => {
    if (genero === 'Male') {
        cy.get('#gender-radio-1').click()
    } else if (genero === 'Female') {
        cy.get('#gender-radio-2').click()
    } else if (genero === 'Other') {
        cy.get('#gender-radio-3').click()
    }
})

Cypress.Commands.add('inserirDataDeAniversario', (dia,mes,ano) => {
    cy.get(loc.FORMS.DATE_OF_BIRTH).click()
    cy.get('.react-datepicker__month-select').select(mes)
    cy.get('.react-datepicker__year-select').select(ano)
    cy.get('.react-datepicker__day--0' + dia).click()
})

Cypress.Commands.add('escolherHobbie', (hobbie) => {
    if (hobbie === 'Sports') {
        cy.get('#hobbies-checkbox-1').click()
    } else if (hobbie === 'Reading') {
        cy.get('#hobbies-checkbox-2').click()
    } else if (hobbie === 'Music') {
        cy.get('#hobbies-checkbox-3').click()
    }
})

Cypress.Commands.add('escolherEstado', (state) => {
    if (state === 'NCR') {
        cy.get(loc.FORMS.STATE).click().get('#react-select-3-option-0').click()
    } else if (state === 'Uttar Pradesh') {
        cy.get(loc.FORMS.STATE).click().get('#react-select-3-option-1').click()
    } else if (state === 'Haryana') {
        cy.get(loc.FORMS.STATE).click().get('#react-select-3-option-2').click()
    } else if (state === 'Rajasthan') {
        cy.get(loc.FORMS.STATE).click().get('#react-select-3-option-3').click()
    }
})

Cypress.Commands.add('escolherCidade', (city) => {
    if (city === 'Delhi') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-0').click()
    } else if (city === 'Lucknow') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-1').click()
    } else if (city === 'Chandigarh') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-2').click()
    } else if (city === 'Jaipur') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-0').click()
    } else if (city === 'Gurgaon') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-1').click()
    } else if (city === 'Noida') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-2').click()
    } else if (city === 'Agra') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-0').click()
    } else if (city === 'Jaiselmer') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-1').click()
    } else if (city === 'Merrut') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-2').click()
    } else if (city === 'Karnal') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-0').click()
    } else if (city === 'Panipat') {
        cy.get(loc.FORMS.CITY).click()
        cy.get('#react-select-4-option-1').click()
    }
})