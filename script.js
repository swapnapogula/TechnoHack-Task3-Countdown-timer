let countdown;
let timeInSeconds = 0;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'Pause';
        countdown = setInterval(updateTime, 1000);
    } else {
        isRunning = false;
        startButton.textContent = 'Resume';
        clearInterval(countdown);
    }
}

function stopTimer() {
    isRunning = false;
    startButton.textContent = 'Start';
    clearInterval(countdown);
}

function resetTimer() {
    isRunning = false;
    startButton.textContent = 'Start';
    clearInterval(countdown);
    timeInSeconds = 0;
    updateDisplay();
}

function updateTime() {
    timeInSeconds += 1;
    if (timeInSeconds < 0) {
        stopTimer();
    }
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

resetTimer(); // Initialize the timer display
