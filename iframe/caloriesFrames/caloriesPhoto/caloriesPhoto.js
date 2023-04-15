const cameraIcon = document.getElementById("camera-icon");
const caloriesGained = document.getElementById("value1"); // seleciona o elemento span com a classe "value" dentro da div com a classe "calories-gained"
const caloriesLost = document.getElementById("value2");        

cameraIcon.addEventListener("click", function() {
    caloriesGained.textContent = parseInt(caloriesGained.textContent) + 500;
    sessionStorage.setItem("calories_gained", caloriesGained.textContent);
});

window.onload = function() {
    caloriesGained.textContent = sessionStorage.getItem("calories_gained") == null ? 0 : sessionStorage.getItem("calories_gained");
    if(sessionStorage.getItem("calories_lost")) {
        let lost = sessionStorage.getItem("calories_lost");
        caloriesLost.textContent = lost;
        sessionStorage.setItem("calories_lost",caloriesLost.textContent);
    }
};

window.addEventListener("beforeunload", function(e) {
    sessionStorage.removeItem("{session}");
  });

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../caloriesConnect/caloriesConnect.html"
})