'use strict';

const mongoose = require( 'mongoose' );

mongoose
  .connect(
    'mongodb://localhost/social',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function() {
      console.info( 'mongodb connected' );
  })
;

module.exports = mongoose;
