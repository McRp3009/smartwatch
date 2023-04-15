var counter = document.getElementById("counter");

var intervalId; // used to keep track of the interval

var seconds = 0;
var minutes = 0;

let km = 0.0;
let cal = 0;
let bpm = 70;

let average = [];
average.push(bpm);

window.onload = startCounter();

function startCounter() {
  intervalId = setInterval(function() {
    seconds++;
    if(seconds % 30 == 0) {
      km = km + 0.1;
      const dist = document.getElementById("distance");
      dist.innerHTML = "Km: " + km.toFixed(1);
    }
    if(seconds % 4 == 0) {
      cal = cal + 1;
      const calories = document.getElementById("calories");
      calories.innerHTML = "Cal: " + cal;
    }

    if(seconds % 2 == 0) {
      var change = getRandomInt(-1, 3);
      if(change > 0) {
        change = 1;
        if(bpm < 150) {
          bpm = bpm + change;
        }
      }
      pulse();
      average.push(bpm)
      const beats = document.getElementById("bpm");
      beats.innerText = bpm + ' bpm';
    }

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    var secondsString = seconds < 10 ? "0" + seconds : seconds;
    var minutesString = minutes < 10 ? "0" + minutes : minutes;
    counter.innerHTML = minutesString + ":" + secondsString;
  }, 1000);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function stopCounter() {
  clearInterval(intervalId);
}

const pause = document.getElementById("pause");

pause.addEventListener("click", () => {
  // const dist = document.getElementById("distance");
  sessionStorage.setItem("dist", km + " Km");
  // const calories = document.getElementById("calories");
  sessionStorage.setItem("cal", cal);
  document.location.href = "../pausedWorkout/pausedWorkout.html";
  let final = 0;
  average.forEach(element => {
    final += element;
  });
  final = final / average.length;

  sessionStorage.setItem("bpm", final);
});

const heart1 = document.getElementById("icon1");
const heart2 = document.getElementById("icon2");

function pulse() {
  heart1.style.animation = "heartbeat 1s 1";
  heart2.style.animation = "heartbeat 1s 1";
}

heart1.addEventListener("animationend", () => {
  heart1.style.animation = "unset";
});
heart2.addEventListener("animationend", () => {
  heart2.style.animation = "unset";
});
