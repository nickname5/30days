const navs = document.querySelectorAll('.nav-item');
const tricky = document.querySelector('.tricky');

navs.forEach((nav) => {
  nav.addEventListener('mouseenter', meHandler);
  nav.addEventListener('mouseleave', mlHandler);
});

function meHandler(e) {
  let dropdown = document.querySelector(`.dropdown[data-num="${this.dataset.num}"]`);
  document.querySelector(`.dropdown[data-num="${this.dataset.num}"]`).style.display = 'block';
  // this.appendChild(tricky);

  // console.log(e, this, this.dataset.num, dropdown);
  switch (+this.dataset.num) {
    case 1:
      tricky.style.transform = `translateX(0px)`;
      document.querySelector(`.dropdown[data-num="1"]`).classList.add('dropdown-d');
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="1"]`).classList.add('dropdown-op');
      }, 150)
      break;
    case 2:
      tricky.style.transform = `translateX(200px)`;
      document.querySelector(`.dropdown[data-num="2"]`).classList.add('dropdown-d');
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="2"]`).classList.add('dropdown-op');
      }, 150)
      break;
    case 3:
      tricky.style.transform = `translateX(600px)`;
      document.querySelector(`.dropdown[data-num="3"]`).classList.add('dropdown-d');
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="3"]`).classList.add('dropdown-op');
      }, 150)
      break;
    default:
  }
}

function mlHandler(e) {
  switch (+this.dataset.num) {
    case 1:
      // tricky.style.transform = `translateX(0px)`;
      setTimeout(() => {
      document.querySelector(`.dropdown[data-num="1"]`).classList.remove('dropdown-d');
      }, 150)
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="1"]`).classList.remove('dropdown-op');
      }, 150)
      break;
    case 2:
      // tricky.style.transform = `translateX(200px)`;
      setTimeout(() => {
      document.querySelector(`.dropdown[data-num="2"]`).classList.remove('dropdown-d');
      }, 150)
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="2"]`).classList.remove('dropdown-op');
      }, 150)
      break;
    case 3:
      // tricky.style.transform = `translateX(600px)`;
      setTimeout(() => {
      document.querySelector(`.dropdown[data-num="3"]`).classList.remove('dropdown-d');
      }, 150)
      setTimeout(() => {
        document.querySelector(`.dropdown[data-num="3"]`).classList.remove('dropdown-op');
      }, 150)
      break;
    default:
  }

}
