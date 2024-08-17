let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(tInterval);
    running = false;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  display.innerHTML = "00:00:00";
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}
