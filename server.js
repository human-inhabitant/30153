'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();
app.use( bodyParser.json() );

app.use( '/api/posts', require( './controllers/api/posts' ) );
app.use( require( './controllers/static' ) );

app.use('/api/sessions', require( './controllers/api/sessions' ) );
app.use('/api/users', require( './controllers/api/users' ) );

const port = process.env.PORT || 3000;
const server = app.listen( port, function() {
  console.info( 'Server', process.pid, 'listening on', port );
});

require( './websockets' ).connect( server );
