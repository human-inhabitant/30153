'use strict';

const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/social', function() {
  console.info( 'mongodb connected' );
});
module.exports = mongoose;