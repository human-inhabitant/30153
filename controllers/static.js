'use strict';

const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );

router.use( express.static( `${__dirname}/../assets` ) );
router.use( express.static( `${__dirname}/../templates` ) );

router.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname, '../layouts', 'app.html' ) );
});

module.exports = router;
