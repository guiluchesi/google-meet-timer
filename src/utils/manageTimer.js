const { CUSTOM_TIMER_ID } = require('./constants');
const createTimer = require('./createTimer');
const startTimer = require('./startTimer');
const report = require('./report');

const manageTimer = () => {
  const existentTimer = document.getElementById(CUSTOM_TIMER_ID);

  if (existentTimer) {
    const timerContent = existentTimer.innerText;
    report(timerContent);

    existentTimer.remove();
    return;
  }

  const newTimer = createTimer();
  startTimer(newTimer);
};

module.exports = manageTimer;
