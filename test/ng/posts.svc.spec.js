'use strict';

describe( 'posts.srv', function() {
  beforeEach( module( 'app' ) );
  var PostsSvc, $httpBackend;

  beforeEach( inject( function( _PostsSvc_, _$httpBackend_ ) {
    PostsSvc = _PostsSvc_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach( function() {
    $httpBackend.flush();
  });

  describe( '#fetch', function() {
    beforeEach( function() {
      $httpBackend
        .expect( 'GET', '/api/posts' )
        .respond([
          { username: 'human', body: 'first post' },
          { username: 'human', body: 'second post' }
        ])
      ;
    });

    it( 'gets 2 posts', function() {
      PostsSvc.fetch().success( function( posts ) {
        expect( posts ).to.have.length( 2 ) ;
      });
    });
  });

  /**
  describe( '#create', function() {
    var data = { username: 'human', body: 'first post' };
    beforeEach( function() {
      $httpBackend
        .expect( 'POST', '/api/posts', data )
        .response( 200, true )
      ;
    });

    it( 'creates post', function() {
      PostsSvc
        .create( data )
        .success( function( response ) {
          console.info( response );
        })
      ;
    });
  });
   **/
});
