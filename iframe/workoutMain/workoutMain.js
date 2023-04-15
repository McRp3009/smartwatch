const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../mainMenu/mainMenu.html"
});

// trying swipe //

document.addEventListener("swiped-right", function() {
    prompt("yooooo");
    document.location.href = "../mainMenu/mainMenu.html";
});