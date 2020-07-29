'use strict';

const Post = require( '../../models/post' );
const router = require( 'express' ).Router();
const websockets = require( '../../websockets' );

router
  .get( '/', function( req, res, next ) {
    Post
      .find()
      .sort()
      .exec( function( err, posts ) {
        if ( err ) {
          return next( err );
        }
        res.json( posts );
      })
    ;
  })
;

router
  .post( '/', function( req, res, next ) {
    const post = new Post({
      username: req.body.username,
      body: req.body.body
    });
    post
      .save( function( err, post ) {
        if ( err ) {
          return next( err );
        }
        websockets.broadcast( 'new_post', post );
        res.status( 201 ).json( post );
      })
    ;
  })
;

module.exports = router;
