'use strict';

const router = require( 'index' );
const websockets = require( '../../websockets' );
const Post = require( '../../models/post' );

router
  .get( '/', function( req, res, next ) {
    Post
      .find()
      .sort( '-date' )
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
    const post = new Post({ body: req.body.body });
    post.username = req.body.username;
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
