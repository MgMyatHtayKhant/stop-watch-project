const times = document.querySelectorAll(".times > span");
const timesArray = [...times];
const [hoursTag, minutesTag, secondsTag, , millisecondsTag] = timesArray;

const buttons = document.querySelectorAll(".buttons > button");
const buttonsArray = [...buttons];
const [startButton, pauseButton, continueButton, restartButton] = buttonsArray;

let initialMilliseconds;
let counter;
let count;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startButton.addEventListener("click", (e) => {
  clearInterval(counter);
  initialMilliseconds = new Date();
  counter = setInterval(timer, 1);
});

pauseButton.addEventListener("click", (e) => {
  clearInterval(counter);
});

continueButton.addEventListener("click", (e) => {
  clearInterval(counter);
  initialMilliseconds = new Date();
  counter = setInterval(timer, 1);
});

restartButton.addEventListener("click", (e) => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  clearInterval(counter);
  initialMilliseconds = new Date();
  counter = setInterval(timer, 1);
});

function timer() {
  const current = new Date();
  count = current - initialMilliseconds;
  milliseconds += count; // Increase milliseconds
  initialMilliseconds = current;
  displayCount();
}

function displayCount() {
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
        if (hours === 60) {
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
      }
    }
  }
  hoursTag.innerText = zeropad(hours, 2);
  minutesTag.innerText = zeropad(minutes, 2);
  secondsTag.innerText = zeropad(seconds, 2);
  millisecondsTag.innerText = zeropad(milliseconds, 3);
}

function zeropad(num, places) {
  return String(num).padStart(places, "0");
}
