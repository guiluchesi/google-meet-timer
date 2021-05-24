const { INITIAL_TIMER_IN_MINUTES, WRAPPER_SELECTOR } = require('./constants');
const normalizeTime = require('./normalizeTime');

const report = (timer) => {
  const [minutes, seconds] = timer.replace(/\s/g, '').split(':');

  const minutesSpent = minutes < 0
    ? INITIAL_TIMER_IN_MINUTES + Math.abs(minutes)
    : INITIAL_TIMER_IN_MINUTES - minutes;
  const normalizedMinutes = normalizeTime(minutesSpent);

  const secondsSpent = 60 - seconds;
  const normalizedSeconds = normalizeTime(secondsSpent);

  const alertMessage = document.createElement('div');
  const reportMessage = `Tempo gasto: ${normalizedMinutes}:${normalizedSeconds}`;

  alertMessage.innerText = reportMessage;
  alertMessage.style.position = 'absolute';
  alertMessage.style.bottom = '-50px';
  alertMessage.style.backgroundColor = 'white';
  alertMessage.style.width = '100%';
  alertMessage.style.padding = '10px 15px';
  alertMessage.style.borderTopLeftRadius = '8px';
  alertMessage.style.borderBottomLeftRadius = '8px';
  alertMessage.style.transform = 'translateX(100%)';
  alertMessage.style.transition = 'transform 0.3s ease-in-out';
  alertMessage.style.position = 'absolute';
  alertMessage.style.fontSize = '0.9rem';
  alertMessage.style.fontWeight = '500';
  alertMessage.style.color = '#5f6368';
  alertMessage.style.boxShadow = '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)';

  const wrapper = document.querySelector(WRAPPER_SELECTOR);
  if (wrapper) {
    wrapper.appendChild(alertMessage);

    setTimeout(() => {
      alertMessage.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      alertMessage.style.transform = 'translateX(100%)';

      setTimeout(() => {
        alertMessage.remove();
      }, 500);
    }, 5000);
  } else {
    console.log(reportMessage);
  }
};

module.exports = report;
