//chama FileSystem
const fs = require('fs');
const path = require('path');

// função de extrair links
function mdLinks(filePath, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
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
          file: filePath
        });
      });
      if(options.validate === false){
      resolve(links);
      } else {
        const validLinks = links.map(link => {
          return fetch(link.href).then(response => {
            link.status = response.status
            if(response.status >= 200 && response.status <= 299){
            
              link.ok = 'ok'
            } else{
              link.ok = 'fail'
            }
            return link;
          }
          ).catch(err => {
            link.ok = 'fail'
            link.status = 'invalid link'
            return link
          })
        })
        resolve(Promise.all(validLinks))
      }
      
    });
  });
}

mdLinks('./test/files/malu.md', {validate: true}).then(result => console.log(result)).catch(error => console.error(error));

module.exports = { mdLinks };
