const normalizeTime = (time) => time < 10 ? `0${time}` : time;

module.exports = normalizeTime;
