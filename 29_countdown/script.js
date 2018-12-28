let now, int;
const timer = document.querySelector('.timer');
const backTimeEl = document.querySelector('.backTime');
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

buttons.forEach((button) => button.addEventListener('click', buttonClickHandler));
input.addEventListener('keypress', inputKeyPressHandler);
function clearInt() {
  clearInterval(int);
}

function buttonClickHandler(e) {
  let seconds = +this.attributes["data-time"].value;
  start(seconds);
}

function start(seconds) {
  let now = new Date();
  clearInt();
  let backTime = new Date(now.getTime() + seconds * 1000);
  let serviceTime = new Date(seconds * 1000);
  if (backTime.getMinutes() > 10) {
    backTimeEl.innerText = `${backTime.getHours()}.${backTime.getMinutes()}`;
  } else {
    backTimeEl.innerText = `${backTime.getHours()}.0${backTime.getMinutes()}`;
  }
  int = setInterval(() => {
    seconds--;
    serviceTime = new Date(seconds * 1000);
    let strMinutes;
    if (serviceTime.getMinutes() > 10) {
      strMinutes = serviceTime.getMinutes();
    } else {
      strMinutes = `0${serviceTime.getMinutes()}`;
    }
    let strSeconds;
    if (serviceTime.getSeconds() > 10) {
      strSeconds = serviceTime.getSeconds();
    } else {
      strSeconds = `0${serviceTime.getSeconds()}`;
    }
    timer.innerText = `${serviceTime.getHours() - 2}:${strMinutes}:${strSeconds}`;
    document.title = `${serviceTime.getHours() - 2}:${strMinutes}:${strSeconds}`;
  }, 1000);
}

function inputKeyPressHandler(e) {
  if (e.keyCode === 13) {
    let seconds = e.target.valueAsNumber * 60;
    start(seconds);
  }
}
