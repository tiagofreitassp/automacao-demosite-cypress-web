# Automacao-demosite-cypress-web
- Este projeto possui scripts de automações utilizando o Cypress no portal DemoSite.

# Requisitos
- Node.js
- NPM
- Visual Studio Code (recomendado)

# Antes de editar e executar
- Ao salvar o projeto localmente, abra o CMD, Terminal ou o Terminal do Visual Studo Code e vá até o diretório e digite o comando 'npm install' sem as aspas para baixar e instalar as dependencias Node, sem isso, não será possivel executar o projeto.
- Só precisa fazer este procedimento quando a pasta 'node_modules' estiver ausente, lembre-se que não é recomendado esta pasta subir no GIT devido o tamanho do mesmo. Por isso nunca remova a linha 'node_modules/' do arquivo gitignore.

# Comandos de execuções
- Executar via linha de comando uma classe especifica: 

npm run cypress:run -- --spec cypress/integration/basic.spec.js

- Executar via linha de comando uma classe especifica com a janela do navegador aberta.

npm run cypress:run -- --spec cypress/integration/basic.spec.js --headed

- Executar via linha de comando uma classe especifica com a janela do navegador aberta sem fecha-la no final da execução.

npm run cypress:run -- --spec cypress/integration/basic.spec.js --headed --no-exit