angular
  .module( 'app' )
  .run( function( $rootScope, $timeout ) {
    (function connect() {
      var url = 'ws://localhost:3000';
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