/* eslint no-console: 0 */

import express from 'express';
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/dist'));

app.listen(app.get('port'), function listen() {
  'use strict';
  console.log('Node app is running on port', app.get('port'));
});
