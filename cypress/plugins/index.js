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

module.exports = (on, config) => {
  // -------- Cria uma pasta de screenshots com timestamp para cada execução -------- 
  const ts = obterDataHora();
  const customFolderName = `Evidências Cypress_${ts}`; // troque "minhapasta" se quiser outro nome
  const screenshotsPath = path.join(config.projectRoot, '/cypress/screenshots/', customFolderName);

  if (!fs.existsSync(screenshotsPath)) {
    fs.mkdirSync(screenshotsPath, { recursive: true });
  }

  // define a pasta onde o Cypress irá salvar screenshots durante esta execução
  config.screenshotsFolder = screenshotsPath;

  // --------  Gera e move os vídeos para uma pasta com timestamp para cada execução --------

  const prefix = 'Evidencias Cypress';
  const vd = obterDataHora(); // ex: 11-03-2026_10-30-05

  // pasta onde queremos que os vídeos fiquem para esta execução
  const evidenciasFolder = path.join(config.projectRoot, '/cypress/videos/', `${prefix}-${vd}`);

  if (!fs.existsSync(evidenciasFolder)) {
    fs.mkdirSync(evidenciasFolder, { recursive: true });
  }

  // faz o Cypress gravar os vídeos nessa pasta durante a execução
  config.videosFolder = evidenciasFolder;

  // após cada spec, renomeia/move o vídeo para um nome com o spec + timestamp
  on('after:spec', (spec, results) => {
    if (!results || !results.video) return null;

    const tsSpec = obterDataHora(); // timestamp do momento do after:spec
    const specName = spec.name || spec.relative || 'spec';
    const safeSpec = specName.replace(/[\/\\?%*:|"<>]/g, '-').replace(/\s+/g, ' ').trim();

    // caminho original do vídeo gerado pelo Cypress
    const oldVideoPath = results.video;

    // montar novo nome e caminho (dentro da mesma pasta Evidencias)
    const newVideoName = `${safeSpec} - ${tsSpec}.mp4`;
    const newVideoPath = path.join(evidenciasFolder, newVideoName);

    try {
      // tenta mover/renomear
      fs.renameSync(oldVideoPath, newVideoPath);
    } catch (err) {
      // fallback: copia e remove o original
      try {
        fs.copyFileSync(oldVideoPath, newVideoPath);
        fs.unlinkSync(oldVideoPath);
      } catch (e) {
        console.error('Erro ao mover/cp vídeo:', e);
      }
    }

    // Cleanup: remove arquivos residuais relacionados ao mesmo spec (ex.: versões comprimidas/temporárias)
    try {
      const dir = path.dirname(oldVideoPath);
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        if (filePath === newVideoPath) return;
        if (file.includes(safeSpec)) {
          try { fs.unlinkSync(filePath); } catch (_) { /* ignore */ }
        }
      });
    } catch (cleanupErr) {
      console.error('Erro no cleanup de vídeos residuais:', cleanupErr);
    }

    // atualiza o objeto results para plugins/relatórios que possam usar o caminho
    results.video = newVideoPath;
    return null;
  });

  return config;
};