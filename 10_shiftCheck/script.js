const list = document.querySelector('.checklist');
let shiftIsPressing = false;
let prev;
let current;

class listItem {
  constructor(el) {
    this.input = el.children[0];
    this.checked = false;
    this.elem = el;
  }
}

const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', itemClickHandler);
});

function check(el) {
  if (shiftIsPressing) {
    console.log('shift', shiftIsPressing);
    el.classList.add('checked');
    el.children[0].checked = true;
  } else {
    el.children[0].checked = !el.children[0].checked;
    el.classList.toggle('checked');
  }
}

function itemClickHandler(e) {
  current = this;
  console.log(current, prev);
  let start;
  let finish;
  if (shiftIsPressing && current !== prev) {
    console.log('shift block');
    for (var i = 0; i < this.parentElement.children.length; i++) {
      if (this.parentElement.children[i] === current) {
        finish = i;
      }
      if (this.parentElement.children[i] === prev) {
        start = i;
      }
    }
    console.log(start, finish);
    if (start < finish) {
      for (var i = start; i <= finish; i++) {
        check(this.parentElement.children[i]);
      }
    } else {
      for (var i = finish; i <= start; i++) {
        check(this.parentElement.children[i]);
      }
    }
    prev = this;
    return
  } else {
    if (e.target.tagName === 'INPUT') {
      this.classList.toggle('checked');
    } else {
      check(current);
    }
  }
  console.log(start, finish);
  prev = this;
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Shift') {
    shiftIsPressing = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Shift') {
    shiftIsPressing = false;
  }
});
