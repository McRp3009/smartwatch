// import * as create from './createScreen.js';
// import {} from 'loadScreen.js';

const button = document.getElementById('switch');
// const screen1Button = document.getElementById('startWorkout');
// const screen1B = document.getElementById('selectWorkout');
const display = document.querySelector(".watch_display");
let currentScreen = 0;

createScreen1();

//-------------------------------------------------------------//

function createScreen1() {
  const screen1 = document.createElement('div');
  screen1.classList.add('screen');
  screen1.id = "screen1";
  screen1.innerHTML = '<div id="top-left"><h1 id= "1" >1</h1></div><div id="bottom-left"><h1 id= "2" >2</h1></div><div id="top-right"><h1 id= "3" >3</h1></div><div id="bottom-right"><h1 id= "4" >4</h1></div>';  
  let content = screen1.outerHTML;
  sessionStorage.setItem(screen1.id, content);
  const tl = document.getElementById('top-left');
  const tr = document.getElementById('top-right');
  const bl = document.getElementById('bottom-left');
  const br = document.getElementById('bottom-right');

  tl.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });

  tr.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });
  bl.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });

  br.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });
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
  const main = sessionStorage.getItem("screen1");
  display.innerHTML = main;

  const tl = document.getElementById('top-left');
  const tr = document.getElementById('top-right');
  const bl = document.getElementById('bottom-left');
  const br = document.getElementById('bottom-right');

  tl.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });

  tr.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });
  bl.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });

  br.addEventListener('click', () => {
    createScreen2();
    loadScreen2();
  });
};  





  