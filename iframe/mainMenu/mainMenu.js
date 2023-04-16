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

let touchstartY = 0
let touchendY = 0

let swipeThreshold = 50;

const screen = document.getElementById("screen");
    
function checkDirection() {
    xDiff = touchstartX - touchendX;
    yDiff = touchstartY - touchendY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (Math.abs(xDiff) > swipeThreshold) {
            if(xDiff > 0) {
                document.location.href = "../workoutFrames/workoutMain/workoutMain2.html";
            } else {
                alert("right");
            }
        }
    } else if (Math.abs(yDiff) > swipeThreshold) {
        if(yDiff > 0) {
            alert("up");
        } else {
            alert("down");
        }
    }
};

screen.addEventListener('touchstart', e => {
    if(e.changedTouches.length == 1) {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }
});

screen.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
});