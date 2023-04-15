const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;
sessionStorage.setItem("current", "Run");
const activitiesR = ["Run", "Walk", "Cycling"];
const activitiesL= ["Run", "Cycling", "Walk"];

right.addEventListener("click", () => {
    const curr = document.getElementById("current");
    index = (index + 1) % activitiesR.length;
    curr.innerHTML = activitiesR[index];

    const imagem = document.getElementById("icon");
    let s = activitiesR[index] + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activitiesR[index]);
});

left.addEventListener("click", () => {
    const curr = document.getElementById("current");
    index = (index + 1) % activitiesL.length;
    curr.innerHTML = activitiesL[index];

    const imagem = document.getElementById("icon");
    let s = activitiesL[index] + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activitiesL[index]);
});

const options = document.getElementById("options");

options.addEventListener("click", () => {
    document.location.href = "../workoutMain/workoutMain2.html";
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    let s = sessionStorage.getItem("previous");
    sessionStorage.setItem("current", s)
    document.location.href = "../workoutMain/workoutMain2.html"
})