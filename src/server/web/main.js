const express = require('express');
const config = require('../../../config');
const rewrite = require('./rewrite');

function run() {
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8080;

  const app = express();
  app.disable('x-powered-by');
  app.use(express.static(config.build.assetsRoot));
  app.get('*', rewrite);
  app.listen(port, host, (err) => {
    if (!err) {
      global.console.info(`server started ${host}:${port}`);
    } else {
      global.console.error(err);
    }
  });
}

module.exports = run;
