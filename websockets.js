'use strict';

const ws = require( 'ws' );
const _ = require( 'lodash' );
const clients = [];

exports.connect = function( server ) {
  const wss = new ws.Server( { server: server } );
  wss.on( 'connection', function( ws ) {
    clients.push( ws );
    exports.broadcast( 'new client joined' );
    ws.on( 'close', function() {
      _.remove( clients, ws );
    });
  });
};

exports.broadcast = function( topic, data ) {
  const json = JSON.stringify( { topic: topic, data: data } );
  clients
    .forEach( function( client ) {
      client.send( json );
    })
  ;
};