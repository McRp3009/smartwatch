const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
    document.location.href = "..";
});

const next = document.getElementById("ok");

next.addEventListener("click", () => {
    console.log("next")
    sessionStorage.setItem("friendAdd","default")
    document.location.href = "../friendsList/friendsframe.html";
});

window.onload = loadFriend();

function loadFriend() {
    let id;
    if(sessionStorage.getItem("friendId") !== null) {
        id = sessionStorage.getItem("friendId");
    } else {
        id = "123456";
    }

    const nome = document.getElementById("id");

    nome.innerText = nome.innerText + " Id: " + id;
}