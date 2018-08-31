class Hand {
  constructor(el, startTime, changeDeg, int, max, name) {
    this.el = el;
    this.startTime = startTime;
    this.time = startTime;
    this.change = changeDeg;
    this.angle = this.time * this.change;
    this.int = int;
    this.max = max;
    this.name = name;
  }

  rotate() {
    this.el.style.transform = `rotate(${this.angle}deg)`;
  }

  incrementor() {
    if (this.time === this.max) {
      console.log(this.time, this.max, this.name);
      console.log(this.el.classList);
      this.el.classList.add('hand_without_transition');
      console.log(this.el.classList);
      this.time = 1;
    } else {
      this.time++;
    }

    if (this.time === 2) {
      console.log(this.el.classList);
      this.el.classList.remove('hand_without_transition');
      console.log(this.el.classList);
    }
  }

  go() {
    this.incrementor();
    this.angle = this.time * this.change;
    this.rotate();
    console.log(this.time, this.name);
  }

  start() {
    setInterval(this.go.bind(this), this.int)
  }
}

class MinutesHand extends Hand {
  constructor(el, startTime, changeDeg, int, max, name) {
    super(el, startTime, changeDeg, int, max, name);
    this.minutes = parseInt(this.time / 60);
    this.angle = this.minutes * this.change;
  }

  go() {
    this.incrementor();
    console.log(this.minutes, this.time, this.time % 60, this.name);
    if (this.time % 60 == 0) {
      this.minutes = this.time / 60;
      this.angle = this.minutes * this.change;
      this.rotate();
    }
  }
}

class HoursHand extends MinutesHand {
  constructor(el, startTime, changeDeg, int, max, name, hours) {
    super(el, startTime, changeDeg, int, max, name);
    this.hours = hours;
    this.angle = (this.hours * 60 + this.minutes) * this.change;
  }

  go() {
    this.incrementor();
    console.log(this.minutes, this.time, this.time % 60, this.hours, this.name);
    if (this.time % 60 == 0) {
      this.minutes = this.time / 60;
      this.angle = (this.hours * 60 + this.minutes) * this.change;
      this.rotate();
    }
  }
}

let time = new Date();
console.log(
  time.getHours(),
  time.getMinutes(),
  time.getSeconds()
);

let mHand = new MinutesHand(document.getElementById('m'), time.getMinutes() * 60 + time.getSeconds(), 6, 1000, 3600, 'min');
let sHand = new Hand(document.getElementById('s'), time.getSeconds(), 6, 1000, 60, 'sec');
let hHand = new HoursHand(document.getElementById('h'), time.getMinutes() * 60 + time.getSeconds(), 0.5, 1000, 43200, 'hour', time.getHours());

mHand.rotate();
sHand.rotate();
hHand.rotate();
mHand.start();
sHand.start();
hHand.start();
