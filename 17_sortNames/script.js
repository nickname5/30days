const bands = ['The Pilots In You', 'The Devul Wears Prada',
"Pierce the Veikl", 'Norma Jean', 'The Bled', 'Say anything',
'We Came As Romans', 'Counterparts', 'Oh, Sleep', 'A Skylit Drive',
'Anywhere But Here', 'An Old Dog'];

const reg1 = /the\s/gi;
const reg2 = /a\s/gi;
const reg3 = /an\s/gi;
const list = document.querySelector('.list');
const sorted = bands.sort((name1, name2) => {
  return removeArticles(name1) > removeArticles(name2)
});

sorted.forEach((str) => {
  addLi(str)
})

function removeArticles(name) {
  if (name.search(reg1) === 0 || name.search(reg2) === 0 ||
  name.search(reg3) === 0) {
    let nameWithoutArticle = name.split(' ');
    nameWithoutArticle.shift();
    nameWithoutArticle = nameWithoutArticle.join(' ');
    return nameWithoutArticle
  }
  return name;
}

function addLi(inner) {
  const li = document.createElement('li');
  li.innerText = inner;
  list.appendChild(li);
}
