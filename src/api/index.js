const path = require('path');
const normalizedPath = path.join(__dirname);
const router = require('express').Router();

require('fs').readdirSync(normalizedPath)
    .filter(file => file !== 'index.js')
    .forEach(file => {
            router.use(require(`./${file}`));
        }
    );

module.exports = router;
