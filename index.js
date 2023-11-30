//chama FileSystem
const fs = require('fs');
const path = require('path');

// função de extrair links
function mdLinks(caminhoDoArquivo) {
  return new Promise((resolve, reject) => {
    // verifica se o caminho do arquivo é relativo ou absoluto
    const caminhoAbsoluto = path.resolve(caminhoDoArquivo);
    fs.readFile(caminhoAbsoluto, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      
      const pattern = /\[([^\]]+)\]\((https?[^)]+)\)/g;
      const matches = Array.from(data.matchAll(pattern));
      if (matches.length === 0) {
        resolve([]);
        return;
      }
      const links = [];
      matches.forEach(match => {
        links.push({
          href: match[2],
          text: match[1],
          file: caminhoAbsoluto
        });
      });

      resolve(links);
    });
  });
}

mdLinks('./README.md').then(result => console.log(result)).catch(error => console.error(error));

module.exports = { mdLinks };
