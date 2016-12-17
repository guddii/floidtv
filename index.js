const postcssMiddleware = require('postcss-middleware');
const express = require('express');
const app = express();
const path = require('path');

app.use('/stylesheets', postcssMiddleware({
  src: function src(req) {
    return path.join('app/stylesheets', req.path);
  },

  plugins: [
    require('postcss-cssnext')()
  ]
}));

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/app/public'));

// views is directory for all template files
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

// This section is optional and used to configure twig.
app.set('twig options', {
  // strict_variables: false
});

app.get('/', function get(req, res) {
  'use strict';
  res.render('pages/index.twig', {
    title: 'floid'
  });
});

app.listen(app.get('port'), function listen() {
  'use strict';
  console.log('Node app is running on port', app.get('port'));
});
