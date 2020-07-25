'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

app.use( bodyParser.json() );
app.get( '/api/posts', function( req, res ) {
    res.json([{
        username: 'dickeyxxx',
        body: 'Node rocks...'
    }]);
});
app.listen( 3000, function() {
    console.info( 'Server listening on', 3000 );
});