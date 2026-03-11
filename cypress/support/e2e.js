// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commandsForm'

require('cypress-xpath')

Cypress.ElementSelector.defaults({
    selectorPriority: ['data-wc', 'data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
})

function obterDataHora() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(now);

  const map = {};
  parts.forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });

  return `${map.day}-${map.month}-${map.year}_${map.hour}-${map.minute}-${map.second}`;
}

afterEach(function () {
  if (!this.currentTest) return;
  const fullTitle = typeof this.currentTest.fullTitle === 'function'
    ? this.currentTest.fullTitle()
    : (this.currentTest.title || 'test');

  const safeTitle = fullTitle.replace(/[\/\\?%*:|"<>]/g, '-').replace(/\s+/g, ' ').trim();
  const timestamp = obterDataHora();
  const screenshotName = `${safeTitle} -- ${timestamp}`;

  // salva sempre; troque a condição para somente falha: (this.currentTest.state === 'failed')
  cy.screenshot(screenshotName, { capture: 'runner' });
}
);
