const synth = window.speechSynthesis;
let message = new SpeechSynthesisUtterance();
let text = 'test text test text test text';
let pitch = 1;
let voice = synth.getVoices()[1];
let rate = 1;
// var a = synth.getVoices();




// function makeOption(i) {
//   const select = document.querySelector('select');
//   let opt = document.createElement('option');
//   opt.setAttribute("value", `${i}`);
//   opt.innerText = synth.getVoices()[i].name;
//   select.appendChild(opt);
// }
// const num = window.speechSynthesis.getVoices().length;
// console.log(num);
// for (var i = 0; i < num; i++) {
//   console.log(synth.getVoices()[i]);
//   makeOption(i);
// }

console.log(message, synth);
// synth.speak(message);

const select = document.querySelector('select');
const rateInput = document.querySelector('input[name="rate"]');
const pitchInput = document.querySelector('input[name="pitch"]');
const textarea = document.querySelector('textarea');
const start = document.querySelector('button[name="start"]');
const stop = document.querySelector('button[name="stop"]');

select.addEventListener('input', selectHandler);
rateInput.addEventListener('input', rateInputHandler);
pitchInput.addEventListener('input', pitchInputHandler);
textarea.addEventListener('input', textAreaHandler);
start.addEventListener('click', startHandler);
stop.addEventListener('click', stopHandler);

function loadVoices() {
  // Fetch the available voices.
	let voices = speechSynthesis.getVoices();
  // Loop through each of the voices.
	voices.forEach(function(voice, i) {
    // Create a new option element.
		let option = document.createElement('option');
    // Set the options value and text.
		option.value = i;
		option.innerHTML = voice.name;
    // Add the option to the voice selector.
		select.appendChild(option);
	});
}
// Execute loadVoices.
loadVoices();
// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};

function textAreaHandler(e) {
  text = e.target.value;
}

function selectHandler(e) {
  voice = synth.getVoices()[`${e.target.value}`];
  console.log(voice);
}

function rateInputHandler(e) {
  rate = e.target.valueAsNumber / 10;
}

function pitchInputHandler(e) {
  pitch = e.target.valueAsNumber / 10;
}

function startHandler(e) {
  console.log(message);
  synth.cancel();
  message = new SpeechSynthesisUtterance();
  console.log(message);
  message.text = text;
  message.pitch = pitch;
  message.rate = rate;
  message.voice = voice;
  console.log(message);
  synth.speak(message);
}

function stopHandler(e) {
  synth.cancel();
}
