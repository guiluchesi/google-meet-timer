const { INITIAL_TIMER_IN_MINUTES } = require('./constants');
const normalizeTime = require('./normalizeTime');

const report = (timer) => {
  const [minutes, seconds] = timer.replace(/\s/g, '').split(':');

  const minutesSpent = minutes < 0
    ? INITIAL_TIMER_IN_MINUTES + Math.abs(minutes)
    : INITIAL_TIMER_IN_MINUTES - minutes;
  const normalizedMinutes = normalizeTime(minutesSpent);

  const secondsSpent = normalizeTime(60 - seconds);
  const normalizedSeconds = normalizeTime(secondsSpent);

  console.log(`Tempo gasto: ${normalizedMinutes}:${normalizedSeconds}`);
};

module.exports = report;
