const createTimer = require('./utils/createTimer');

chrome
  .runtime
  .onMessage
  .addListener(createTimer);
