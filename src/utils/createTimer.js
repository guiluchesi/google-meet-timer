const { CUSTOM_TIMER_ID, INITIAL_TIMER_IN_MINUTES } = require('./constants');

const createTimer = () => {
  const originalClock = document.querySelector('.NzPR9b > span');
  if (!originalClock) {
    setTimeout(() => createTimer(), 1000);
  }

  const timerInMinutes = INITIAL_TIMER_IN_MINUTES;
  const newClock = document.createElement('div');

  newClock.id = CUSTOM_TIMER_ID;
  newClock.innerText = `${timerInMinutes}:00`;
  newClock.style = 'height: 48px; color: #5f6368; font-size: 20px; display: flex; align-items: center; justify-content: center; padding: 0 15px;';
  originalClock.parentNode.insertBefore(newClock, originalClock);

  return newClock;
};

module.exports = createTimer;
