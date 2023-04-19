const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;

window.onload = function() {
    if(sessionStorage.getItem("friends") === null) {
        sessionStorage.setItem("friends",["Jgééé", "Daniulo"]);
    }

    if(sessionStorage.getItem("friendAdd") !== null) {
        let f = sessionStorage.getItem("friendAdd");
        addFriend(f);
        sessionStorage.removeItem("friendAdd");
    }
};

function addFriend(s) {
    let f = sessionStorage.getItem("friends");
    const friends = f.split(",");
    friends.push(s);
    sessionStorage.setItem("friends", friends);
}

right.addEventListener("click", () => {
    let f = sessionStorage.getItem("friends");
    const friends = f.split(",");
    const curr = document.getElementById("current");
    index = (index + 1) % friends.length;
    curr.innerText = friends[index];

    const imagem = document.getElementById("icon");
    let s = friends[index] + ".png"
    if(index > 1) {
        s = "default.png";
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", foodR[index]);
});

left.addEventListener("click", () => {
    let f = sessionStorage.getItem("friends");
    const friends = f.split(",");
    const curr = document.getElementById("current");
    if(index === 0) {
        index = friends.length - 1;
    } else {
        index = index-1;
    }
    curr.innerText = friends[index];

    const imagem = document.getElementById("icon");
    let s;
    if(index >= 3) {
        s = "defaultFriend.png";
    } else {
        s = friends[index] + ".png"
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", activitiesL[index]);
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    // let s = sessionStorage.getItem("previous");
    // sessionStorage.setItem("current", s)
    document.location.href = "../../mainMenu/mainMenu.html"
});

const add = document.getElementById("add");

add.addEventListener("click", () => {
    document.location.href = "../friendsAdd/addfriendframe.html"
});