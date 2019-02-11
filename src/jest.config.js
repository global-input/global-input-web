const {defaults} = require('jest-config');
module.exports = {
  // ...
  verbose:true,

  setupFiles: [...defaults.setupFilesAfterEnv,"./src/tests/mocks.js"],
  setupTestFrameworkScriptFile:"./src/tests/mocks.js"

  // ...
};
