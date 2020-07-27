angular
  .module( 'app' )
  .service( 'UserSvc', function( $http ) {
    var svc = this;

    svc.getUser = function() {
      return $http
        .get( '/api/users' )
        .then( function( response ) {
          return response.data;
        })
      ;
    };
    svc.login = function( username, password ) {
      return $http
        .post( '/api/sessions', { username: username, password: password })
        .then( function( response ) {
          svc.token = response.data;
          $http.defaults.headers.common['X-Auth'] = response.data;
          return svc.getUser();
        })
      ;
    };

    console.info( 'svc', svc );

    /*
    this.getUser = function() {
      return $http
        .get( '/api/users', {
          headers: { 'X-AUTH': this.token }
        })
      ;
    };
    this.login = function( username, password ) {
      return $http
        .post( '/api/sessions', {
          username: username,
          password: password
        })
        .then( function( val ) {
          this.token = val.data;
          return this.getUser();
        })
      ;
    };
    */

  })
;
