let cities = [];
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(function(response) {
    console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
    console.log(response.status); // 200

    return response.json();
  })
  .then((value) => cities = value);

const input = document.querySelector('input');
const list = document.querySelector('.list');
input.addEventListener('input', inputChangeHandler);

function inputChangeHandler(e) {
  list.innerHTML = '';
  handleArr(e.target.value);
}

function handleArr(str) {
  let reg = new RegExp(str, "ig");
  function replacer(str) {
    return `<span class="highlight">${str}</span>`;
  }
  let filtered = cities.filter((obj) => {
    return obj.city.search(reg) >= 0;
  });
  const listItems = filtered.map((obj) => {
    return obj.city.replace(reg, replacer) + ', ' +
    obj.state.replace(reg, replacer) +
    `<span class="number">${obj.population}</span>`
  });
  listItems.forEach((li) => addLi(li));
}

function addLi(inner) {
  const li = document.createElement('li');
  li.classList.add('li')
  li.innerHTML = inner;
  list.appendChild(li);
}
