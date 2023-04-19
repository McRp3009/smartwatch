const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../friendsList/friendsframe.html"
});

const left = document.getElementById("left");

const right = document.getElementById("right");

right.addEventListener("click", () => {
    // prompt("select");
    document.location.href = "../proxAdd/proxAdd.html"
});

//-----------------------------------------------------------------------------------

const i = document.getElementById("input");
input.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        let size = i.value;
        if(i.value.length > 6) {
            return;
        }
        sessionStorage.setItem("friendId", size);
        console.log("here");
        document.location.href = "../friendConfirm/friendConfirm.html";
    }
})