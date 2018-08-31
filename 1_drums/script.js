const keys = document.getElementById('buttons');

keys.addEventListener('click', keysClickHandler);
function keysClickHandler(event) {
  let key;
  if (event.target.tagName === "SECTION") {
    return
  }

  if (event.target.tagName === "SPAN" || event.target.tagName === "KBD") {
    key = event.target.parentElement;
  } else {
    console.log(event.target);
    key = event.target;
  }

  key.classList.add('active');
  let timer = setTimeout(() => {
    key.classList.remove('active');
  }, 50);

  effects(key);
}

window.addEventListener('keydown', keyDownHandler);

function effects(obj) {
  obj.classList.add('active');
  obj.children[2].currentTime = 0;
  obj.children[2].play();
  let timer = setTimeout(() => {
    obj.classList.remove('active');
  }, 50);
}

function keyDownHandler(event) {
  let el = document.querySelector(`div[data-key="${event.keyCode.toString()}"]`);
  effects(el)
}
