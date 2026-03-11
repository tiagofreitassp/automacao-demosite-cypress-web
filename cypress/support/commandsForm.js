import loc from './locators'

Cypress.Commands.add('preencherFormulario', () => {
    cy.fixture('formData').then((dados) => {
        cy.get(loc.FORMS.FIRST_NAME).type(dados.firstName)
        cy.get(loc.FORMS.LAST_NAME).type(dados.lastName)
        cy.get(loc.FORMS.EMAIL).type(dados.email)
        cy.escolherGenero(dados.gender)
        cy.get(loc.FORMS.MOBILE).type(dados.mobile)
        cy.inserirDataDeAniversario(dados.dayOfBirth, dados.monthOfBirth, dados.yearOfBirth)
        cy.get(loc.FORMS.SUBJECTS).type(dados.subjects[0]+'{enter}')
        cy.escolherHobbie(dados.hobbies[0])
        //cy.get(loc.FORMS.PICTURE).attachFile(dados.picture)//verificar qual a função correta para upload de arquivos
        cy.get(loc.FORMS.CURRENT_ADDRESS).type(dados.currentAddress)
        cy.escolherEstado(dados.state[0])
        cy.escolherCidade(dados.city[0])
    })
    cy.get(loc.FORMS.SUBMIT).click()
})

Cypress.Commands.add('validarDadosSubmetidos', () => {
    cy.get('.modal-content').should('be.visible')
    cy.get('.modal-header').should('have.text', 'Thanks for submitting the form')
    cy.get('.table-responsive > table > thead > tr > th:nth-child(1)').should('have.text', 'Label')
    cy.get('.table-responsive > table > thead > tr > th:nth-child(2)').should('have.text', 'Values')

    cy.validarDadosColunaLabel()
    cy.validarDadosColunaValues()

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

Cypress.Commands.add('validarDadosColunaValues', () => {
    cy.fixture('formData').then((dados) => {
        const colunaValues = '.table-responsive > table > tbody > tr > td:nth-child(2)'
        cy.get(colunaValues).should('contain', dados.firstName + ' ' + dados.lastName)
        cy.get(colunaValues).should('contain', dados.email)
        cy.get(colunaValues).should('contain', dados.gender)
        cy.get(colunaValues).should('contain', dados.mobile)
        cy.get(colunaValues).should('contain', dados.dayOfBirth + ' ' + dados.monthOfBirth + ',' + dados.yearOfBirth)
        cy.get(colunaValues).should('contain', dados.subjects[0])
        cy.get(colunaValues).should('contain', dados.hobbies[0])
        //cy.get(colunaValues).should('contain', dados.picture)
        cy.get(colunaValues).should('contain', dados.currentAddress)
        cy.get(colunaValues).should('contain', dados.state[0] + ' ' + dados.city[0])
    })
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
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-0').click()
    } else if (city === 'Lucknow') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-1').click()
    } else if (city === 'Chandigarh') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-2').click()
    } else if (city === 'Jaipur') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-3').click()
    } else if (city === 'Gurgaon') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-4').click()
    } else if (city === 'Noida') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-5').click()
    } else if (city === 'Agra') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-6').click()
    } else if (city === 'Kanpur') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-7').click()
    } else if (city === 'Faridabad') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-8').click()
    } else if (city === 'Sonepat') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-9').click()
    } else if (city === 'Jaiselmer') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-10').click()
    } else if (city === 'Jodhpur') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-11').click()
    } else if (city === 'Bikaner') {
        cy.get(loc.FORMS.CITY).click().get('#react-select-4-option-12').click()
    }
})