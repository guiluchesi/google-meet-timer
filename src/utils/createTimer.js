const startTimer = require('./startTimer');

const createTimer = () => {
  const originalClock = document.querySelector('.NzPR9b > span');
  if (!originalClock) {
    setTimeout(() => createTimer(), 1000);
  }

  const timerInMinutes = 20;
  const timerInSeconds = 60 * timerInMinutes;
  const newClock = document.createElement('div');

  newClock.id = 'custom-timmer';
  newClock.innerText = `${timerInMinutes}:00`;
  newClock.style = 'height: 48px; color: #5f6368; font-size: 20px; display: flex; align-items: center; justify-content: center; padding: 0 15px;';
  originalClock.parentNode.insertBefore(newClock, originalClock);

  startTimer(timerInSeconds, newClock);
};

module.exports = createTimer;
