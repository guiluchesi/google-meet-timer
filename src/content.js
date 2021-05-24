const manageTimer = require('./utils/manageTimer');

chrome
  .runtime
  .onMessage
  .addListener(manageTimer);
