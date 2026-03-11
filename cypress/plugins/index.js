// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs');
const path = require('path');

function dataHora() {
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

module.exports = (on, config) => {
  const ts = dataHora();
  const customFolderName = `Evidências Cypress_${ts}`; // troque "minhapasta" se quiser outro nome
  const screenshotsPath = path.join(config.projectRoot, '/cypress/screenshots/', customFolderName);

  if (!fs.existsSync(screenshotsPath)) {
    fs.mkdirSync(screenshotsPath, { recursive: true });
  }

  // define a pasta onde o Cypress irá salvar screenshots durante esta execução
  config.screenshotsFolder = screenshotsPath;

  return config;
};
