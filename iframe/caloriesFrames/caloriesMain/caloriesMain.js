const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;
let activitiesL;
let activitiesR;
if(sessionStorage.getItem("foodR") === null) {
    activitiesR = ["Data: 11/6/22 237cal", "Data: 12/6/22 235cal", "Data: 14/6/22 241cal"];
}else {
    activitiesR = sessionStorage.getItem("logR");
} 

if(sessionStorage.getItem("logL") === null) {
    activitiesL= ["Data: 11/6/22 237cal", "Data: 14/6/22 241cal", "Data: 12/6/22 235cal"];
} else {
    activitiesL = sessionStorage.getItem("logL");
}

right.addEventListener("click", () => {
    const curr = document.getElementById("current");
    index = (index + 1) % activitiesR.length;
    curr.innerHTML = activitiesR[index];

    const imagem = document.getElementById("icon");
    let s = index + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activitiesR[index]);
});

left.addEventListener("click", () => {
    const curr = document.getElementById("current");
    index = (index + 1) % activitiesL.length;
    curr.innerHTML = activitiesL[index];

    const imagem = document.getElementById("icon");
    let s = index + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activitiesL[index]);
});

// const options = document.getElementById("options");

// options.addEventListener("click", () => {
//     document.location.href = "../workoutMain/workoutMain2.html";
// });

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    let s = sessionStorage.getItem("previous");
    sessionStorage.setItem("current", s)
    document.location.href = "../../mainMenu/mainMenu.html"
});

const add = document.getElementById("add");

add.addEventListener("click", () => {
    document.location.href = "../caloriesConnect/caloriesConnect.html"
});