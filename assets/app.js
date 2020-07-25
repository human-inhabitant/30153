'use strict';

angular.module( 'app', []);

angular
  .module( 'app' )
  .service( 'PostSvc', function( $http ) {
    this.fetch = function() {
      return $http.get( '/api/posts' );
    };
    this.create = function( post ) {
      return $http.post( '/api/posts', post );
    };
  })
;

angular
  .module( 'app' )
  .controller( 'PostsCtrl', function( $scope, PostSvc ) {
    PostSvc
      .fetch()
      .success( function( posts ) {
        $scope.posts = posts;
      })
    ;
    $scope.addPost = function() {
      if ( $scope.postBody ) {
        PostSvc
          .create({
            username: 'dickeyxxx',
            body: $scope.postBody
          })
          .success( function( post ) {
            $scope.posts.unshift( post );
            $scope.postBody = null;
          })
        ;
      }
    };
  })
;
