const config = require('../../../config');

const indexHtml = `${config.build.assetsRoot}/index.html`;

function rewrite(req, res) {
  res.setHeader('Cache-Control', 'public; max-age=300');
  res.sendFile(indexHtml);
}

module.exports = rewrite;
