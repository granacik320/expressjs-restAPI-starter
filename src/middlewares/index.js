const path = require('path');
const normalizedPath = path.join(__dirname);
const middlewares = {};

require('fs').readdirSync(normalizedPath)
    .filter(file => file !== 'index.js')
    .forEach(file => {
            middlewares[path.parse(file).name] = require(`./${file}`);
        }
    );

module.exports = middlewares;
