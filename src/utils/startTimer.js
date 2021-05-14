const startTimer = (duration, display) => {
  let timer = duration;
  let minutes;
  let seconds;
  let timerContent;
  let isNegative;

  setInterval(() => {
    minutes = Math.abs(parseInt(timer / 60, 10));
    seconds = Math.abs(parseInt(timer % 60, 10));

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    timerContent = `${minutes}:${seconds}`;

    if (timer === -1) {
      display.style.color = '#da3025';
    }

    isNegative = (--timer < -1);
    display.textContent = `${isNegative ? '-' : ''}${timerContent}`;
  }, 1000);
};

module.exports = startTimer;
