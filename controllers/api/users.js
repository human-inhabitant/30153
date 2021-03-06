'use strict';

const router = require( 'express' ).Router();
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jwt-simple' );
const User = require( '../../models/user' );
const config = require( '../../config' );

router
  .get( '/', function( req, res, next ) {
    if ( !req.headers['x-auth'] ) {
      return res.send( 401 );
    }
    const auth = jwt.decode( req.headers['x-auth'], config.secret );
    User
      .findOne({ username: auth.username }, function( err, user ) {
        if ( err ) {
          return next( err );
        }
        res.json( user );
      })
    ;
  })
;

router
  .post( '/', function( req, res, next ) {
    const user = new User({ username: req.body.username });
    bcrypt
      .hash( req.body.password, 10, function( err, hash ) {
        if ( err ) {
          return next( err );
        }
        user.password = hash;
        user.save( function( err ) {
          if ( err ) {
            return next( err );
          }
          res.send( 201 );
        });
      })
    ;
  })
;

module.exports = router;