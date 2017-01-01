import express from 'express';
import morgan from 'morgan';
import mocks from './infra/shared/mocks';
import middleware from './infra/shared/middleware';

// Server configuration
const app = express();
const mock = mocks();
app.set('port', (process.env.PORT || 3000));
app.use(morgan('tiny'));

// Routes
app.use('/', express.static(__dirname + '/dist'));
app.get('*', middleware);
app.use('/api', mock);

// Let's go ...
app.listen(app.get('port'), function listen() {
  console.log('Node app is running on port', app.get('port'));
});
