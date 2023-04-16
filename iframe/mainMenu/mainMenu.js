const workout = document.getElementById("workout");

workout.addEventListener("click", () => {
    document.location.href = "../workoutFrames/workoutMain/workoutMain2.html"
});

const cal = document.getElementById("cal");

cal.addEventListener("click", () => {
    document.location.href = "../caloriesFrames/caloriesConnect/caloriesConnect.html"
});

let touchstartX = 0
let touchendX = 0

const screen = document.getElementById("screen");
    
function checkDirection() {
  if (touchendX < touchstartX){
    alert('swiped left!');
  }
  if (touchendX > touchstartX) {
    alert('swiped right!');
  }
};

screen.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

screen.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});