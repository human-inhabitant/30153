angular
  .module( 'app' )
  .controller( 'PostsCtrl', function( $scope, PostsSvc ) {
    PostsSvc
      .fetch()
      .then( function( posts ) {
        $scope.posts = posts;
      })
    ;
    $scope.addPost = function() {
      if ( $scope.postBody ) {
        PostsSvc
          .create({
            username: 'dickeyxxx',
            body: $scope.postBody
          })
          .then( function( post ) {
            //$scope.posts.unshift( post );
            $scope.postBody = null;
          })
        ;
      }
    };
    $scope
      .$on( 'ws:new_post', function( _, post ) {
        $scope.$apply( function() {
          $scope.posts.unshift( post );
        });
      })
    ;
  })
;