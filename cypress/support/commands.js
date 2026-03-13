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
import utils from '../support/utils'

Cypress.Commands.add('acessarMenuForms', () => {
    cy.get(loc.MENU.FORMS).click()
    cy.get(loc.MENU_FORMS.ROUTER_LINK).click()
})

Cypress.Commands.add('gerarScreenshot', (cenario, nome) => {
  const map = {};
  utils.obterDataHora().forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });

  const timestamp = `${map.day}-${map.month}-${map.year}_${map.hour}-${map.minute}-${map.second}`;
  const base = `${(cenario || '').toString().trim()}${cenario && nome ? ' - ' : ''}${(nome || '').toString().trim()}`.trim() || 'screenshot';
  const safeBase = base.replace(/[\/\\?%*:|"<>]/g, '-').replace(/\s+/g, ' ').trim();
  const screenshotName = `${safeBase} -- ${timestamp}`;

  cy.screenshot(screenshotName, {
    capture: 'runner',
    scale: true
  });
});