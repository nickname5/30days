console.table(catalog);
console.dir(catalog);

let filteredArray = catalog.filter(function(item) {
  return item.category === 'women' && item.fashion === 'Casual style';
});
console.table(filteredArray);

let sortedArray = filteredArray.slice();
sortedArray.sort(function(item1, item2) {
  return +Date.parse(item2.dateAdded) - +Date.parse(item1.dateAdded);
});
console.table(sortedArray);

let namePriceArray = catalog.map((item) => {
  return {
    price: item.price,
    title: item.title
  }
});
console.table(namePriceArray);

let amountPriceInGrivnas = namePriceArray.reduce((acc, cur) => {
  return acc + cur.price * 28;
}, 0)

console.log(amountPriceInGrivnas);

let sortedAZ = sortedArray.slice();
sortedAZ.sort(function(item1, item2) {
  return item1.title[0] > item2.title[0];
});

console.table(sortedAZ);

const arrStr = ['car', 'bar', 'foo', 'car', 'bar', 'foo', 'car', 'bar', 'foo',
'car', 'bar', 'foo', 'car', 'bar', 'foo', 'car', 'bar', 'foo', 'bar', 'bar',
'bar', 'bar', 'bar', 'foo', 'foo', 'foo', 'string', 'strangeString'];

const result = arrStr.reduce((acc, cur) => {
  if (acc[cur] === undefined) {
    acc[cur] = 1;
  } else {
    acc[cur]++;
  }
  return acc;
}, {});

console.log(result);


// let links = document.querySelectorAll('.mw-category-group li a');
// let persons = [];
// links.forEach((link) => { persons.push({name: link.innerText}) });
// let namesDe = persons.filter((person) => {
//   return (person.name.match( /\sde\s/gi )) !== null
// });
// console.log(namesDe);
