// import { setTimeout } from "timers/promises";

const screen = document.getElementById("screen");
const connect = document.getElementById("connect_phone");

window.onload = function() {
    connect.innerHtml = "";
    connect.style.border = "1px solid #ff7f27";
    let p = document.createElement("p");
    p.id = "text";
    p.innerText = "Connect to Phone";
    connect.appendChild(p);
};

connect.addEventListener("click", loading);

function loading() {
    connect.removeEventListener("click", loading);
    connect.innerHTML = "";
    connect.style.border = "0px solid white";
    let p1 = document.createElement("p");
    p1.id = "p1";
    p1.innerText = "Connecting \n \n to phone"
    let d = document.createElement("div");
    d.classList.add("progress");
    connect.appendChild(p1);
    connect.appendChild(d);

    setTimeout(function() {
        connect.innerHTML = "";
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        p2.id = "p2";
        p3.id = "p2";
        p4.id = "p2";
        p2.innerText = "Take photo with";
        p3.innerText = "your phone and";
        p4.innerText = "submit it";
        connect.appendChild(p2);
        connect.appendChild(p3);
        connect.appendChild(p4);
        // connect.innerHTML = "";
        //TODO screen that says take photo with your phone
        // document.location.href = "../caloriesPhoto/caloriesPhoto.html";
    }, 5000);

    // connect.innerHTML = "";
    // let p2 = document.createElement("p");
    // p2.id = "p2";
    // p2.innerText = "Take photo with \nyour phone and\n submit it";
};