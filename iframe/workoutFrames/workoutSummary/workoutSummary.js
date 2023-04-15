const summary = document.getElementById("summary");

const date = new Date();

let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();
summary.innerText = summary.innerText + "Data: " + day + "/" + month + "/" + year + "\n";
summary.innerText = summary.innerText + "Activity: " + sessionStorage.getItem("current") + "\n";
summary.innerText = summary.innerText + "Distance: " + sessionStorage.getItem("dist") + "\n";
summary.innerText = summary.innerText + "Calories Lost: " + sessionStorage.getItem("cal") + "\n";
summary.innerText = summary.innerText + "Average bpm: " + sessionStorage.getItem("bpm") + "\n";

const next = document.getElementById("next");

next.addEventListener("click", () => {
    document.location.href = "../workoutMain/workoutMain2.html";
});

// const left = document.getElementById("left");

// left.addEventListener("click", () => {
//     let s = summary.outerHtml;
//     sessionStorage.setItem("summary", s);
//     summary.innerHTML = "<img src = 'bpmSummary' id='graph'>"
// });






