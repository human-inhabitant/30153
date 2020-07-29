angular
  .module( 'app' )
  .run( function( $rootScope, $timeout, $location ) {
    (function connect() {
      var url = 'ws://' + $location.host() + ':' + $location.port();
      var connection = new WebSocket( url );

      connection.onopen = function() {
        console.info( 'WebSocket connected...' );
      };

      connection.onclose = function() {
        console.info( 'WebSocket closed. Reconnecting...' );
        $timeout( connect, 10 * 1e3 );
      };

      connection.onmessage = function( e ) {
        var payload = JSON.parse( e.data );
        $rootScope.$broadcast( 'ws:' + payload.topic, payload.data );
      };
    })();
  })
;