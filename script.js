// Timer variables
let timerInterval;
let timerSeconds = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;

// Timer functions
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timerSeconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  const display = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  document.getElementById('timer-display').textContent = display;
}

// Stopwatch functions
function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchSeconds++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  const display = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  document.getElementById('stopwatch-display').textContent = display;
}


function padNumber(number) {
  return number.toString().padStart(2, '0');
}
