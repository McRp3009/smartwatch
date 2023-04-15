const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../../mainMenu/mainMenu.html"
});

const left = document.getElementById("left");

left.addEventListener("click", () => {
    sessionStorage.setItem("previous", start.innerHTML);
    document.location.href = "../workout/workout.html";
});

const right = document.getElementById("right");

right.addEventListener("click", () => {
    // prompt("select");
    document.location.href = "../selectWorkout/selectWorkout.html"
});

//-----------------------------------------------------------------------------------

window.onload = function() {
    const start = document.getElementById("start");
    start.innerHTML = "Run"
    let s = sessionStorage.getItem("current");
    if(s != null) {
        start.innerHTML = s;
    }
};


document.addEventListener("swiped-right", function() {
    prompt("yooooo");
    document.location.href = "../mainMenu/mainMenu.html";
});