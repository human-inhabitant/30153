'use strict';

exports.config = {
  framework: 'mocha',
  specs: [
    'test/e2e/**/*.spec.js'
  ],
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare: function() {
    process.env.PORT = '3001';
    require( './server' );
  },
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      'args': ['--safe-mode']
    }
  }
};
