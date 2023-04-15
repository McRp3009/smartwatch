// import * as create from './createScreen.js';
// import {} from 'loadScreen.js';

const button = document.getElementById('switch');
// const screen1Button = document.getElementById('startWorkout');
// const screen1B = document.getElementById('selectWorkout');
const screen1Button = document.getElementById('top');
const screen1B = document.getElementById('bottom');
const display = document.querySelector(".watch_display");
let currentScreen = 0;

createScreen1();

screen1Button.addEventListener('click', () => {
  createScreen2();
  loadScreen2();
});
screen1B.addEventListener('click', () => {
  createScreen2();
  loadScreen2();
});

//-------------------------------------------------------------//

function createScreen1() {
  const screen1 = document.createElement('div');
  screen1.classList.add('screen');
  screen1.id = "screen1";
  screen1.innerHTML = '<div id="top"><h1 id= "startWorkout" >Run</h1></div><div id="bottom"><h1 id= "selectWorkout" >Select</h1></div>';  
  let content = screen1.outerHTML;
  sessionStorage.setItem(screen1.id, content);
};

function createScreen2() {
  const screen2 = document.createElement('div');
  screen2.classList.add('screen');
  screen2.id = "screen2";
  screen2.innerHTML = `<h1>works</h1>`;

  const myButton = document.createElement('input');
  myButton.type = 'button';
  myButton.value = 'Click me';
  myButton.id = "back";
  screen2.appendChild(myButton);

  let content = screen2.outerHTML;
  sessionStorage.setItem(screen2.id, content);
};

function loadScreen2() {
  const screen2 = sessionStorage.getItem("screen2");
  display.innerHTML = screen2;
  const back = document.getElementById("back");
  back.addEventListener('click', loadScreen1);
};

function loadScreen1() {
  console.log("button pressed");
  const main = sessionStorage.getItem("screen1");
  display.innerHTML = main;

  const screen1Button = document.getElementById('top');
  const screen1B = document.getElementById('bottom');


  screen1Button.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });

  screen1B.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });
};  
  