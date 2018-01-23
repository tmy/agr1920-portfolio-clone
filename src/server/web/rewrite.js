const config = require('../../../config');

const indexHtml = `${config.build.assetsRoot}/index.html`;

function rewrite(req, res) {
  res.sendFile(indexHtml);
}

module.exports = rewrite;
