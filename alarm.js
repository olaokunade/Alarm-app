let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let timer = document.getElementById("timer");
let pmam = document.getElementById("pmam");
let btn = document.getElementById("btn");
let wrong = document.querySelector(".wrong");

let sound = new Audio("kalimba.mp3");
sound.loop = true;
let activeA = false;
let alarmFigure;
let check;

let a = Math.floor(Math.random() * 40);
let b = Math.floor(Math.random() * 40);

question.innerHTML = `${a} + ${b}`;
let current;

function showTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  current = now.toLocaleTimeString();
  timer.innerHTML = current;

  if (current == alarmFigure) {
    sound.play();
  }
  setInterval(showTime, 1000);
}
showTime();

function opttSetting(id) {
  let select = id;
  let min = 59;
  for (let i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(
      i < 10 ? "0" + i : i
    );
  }
}

function optSetting(id) {
  let select = id;
  let min = 12;
  for (let i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i);
  }
}
optSetting(hour);
opttSetting(min);
opttSetting(sec);

btn.onclick = function () {
  if (activeA === false) {
    hour.disabled = true;
    min.disabled = true;
    sec.disabled = true;
    pmam.disabled = true;
    btn.textContent = "Clear Alarm";
    alarmFigure =
      hour.value + ":" + min.value + ":" + sec.value + " " + pmam.value;
    activeA = true;
  } else {
    show.style.display = "flex";
  }
};

function sub() {
  if (res.value == eval(a + b)) {
    sound.pause();
    hour.disabled = false;
    min.disabled = false;
    sec.disabled = false;
    pmam.disabled = false;

    btn.textContent = "Set Alarm";
    show.style.display = "none";
    activeA = false;
    location.reload();
  } else if (res.value != eval(a + b)) {
    display();
  }
}

function display() {
  wrong.style.display = "inline-block";
  setTimeout(clear, 100);
}
function clear() {
  wrong.style.display = "none";
}