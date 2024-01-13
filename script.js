let countdown;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            startTimer(30 * 60); // reset to 30 minutes
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    timerDisplay.style.color = minutes < 5 ? 'red' : 'white';
}

function startTimer(duration) {
    timer(duration);
}

startButton.addEventListener('click', () => startTimer(30 * 60));
stopButton.addEventListener('click', () => clearInterval(countdown));
resetButton.addEventListener('click', () => startTimer(30 * 60));

// Start the timer automatically
startTimer(30 * 60);
