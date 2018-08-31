const paddingRange = document.querySelector('input[name="padding"]');
const blurRange = document.querySelector('input[name="blur"]');
const colorInput = document.querySelector('input[name="color"]');
const html = document.querySelector('html');
console.log(paddingRange, blurRange, colorInput);
paddingRange.addEventListener('input', paddingRangeHandler);
blurRange.addEventListener('input', blurRangeHandler);
colorInput.addEventListener('input', colorInputHandler);

function paddingRangeHandler(e) {
  console.log(e.target.valueAsNumber);
  html.style.setProperty("--main-padding", `${e.target.valueAsNumber}px`);
}

function blurRangeHandler(e) {
  html.style.setProperty("--main-filter", `blur(${e.target.valueAsNumber / 10}px)`);
}

function colorInputHandler(e) {
  console.log(e.target.value);
  html.style.setProperty("--main-background-color", `${e.target.value}`);
}
