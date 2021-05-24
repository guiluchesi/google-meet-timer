const { INITIAL_TIMER_IN_MINUTES } = require('./constants');
const normalizeTime = require('./normalizeTime');

const startTimer = (display) => {
  const timerInSeconds = 60 * INITIAL_TIMER_IN_MINUTES;
  let timer = timerInSeconds;
  let minutes;
  let seconds;
  let timerContent;
  let isNegative;

  setInterval(() => {
    minutes = Math.abs(parseInt(timer / 60, 10));
    seconds = Math.abs(parseInt(timer % 60, 10));

    minutes = normalizeTime(minutes);
    seconds = normalizeTime(seconds);

    timerContent = `${minutes}:${seconds}`;

    if (timer === -1) {
      display.style.color = '#da3025';
    }

    isNegative = (--timer < -1);
    display.textContent = `${isNegative ? '-' : ''}${timerContent}`;
  }, 1000);
};

module.exports = startTimer;
