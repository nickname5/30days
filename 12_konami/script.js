function recursion(node, str) {
  if (node.textContent.search(/[\wа-я]/gi) !== -1 && node.nodeName === '#text') {
    let string = ''
    do {
      string += str;
    } while (string.length < node.textContent.length);
    node.textContent = string;
  }
  if (node.childNodes.length !== 0) {
    for (var i = 0; i < node.childNodes.length; i++) {
      recursion(node.childNodes[i], str)
    }
  }
}

function start(str) {
  let body = document.querySelector('body');
  for (var i = 0; i < body.childNodes.length; i++) {
    recursion(body.childNodes[i], str)
  }
}

const word = 'wikkie! ';
const comb = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];
const keysArr = [];

function isRightCombination() {
  result = true;
  for (var i = 0; i < 6; i++) {
    if (keysArr[i] !== comb[i]) {
      result = false
    }
  }
  return result
}

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  keysArr.push(e.key);
  keysArr.splice(5, keysArr.length - 6);
  if (isRightCombination()) {
    start(word);
    cornify_add();
    cornify_add();
    cornify_add();
  }
});
