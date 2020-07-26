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