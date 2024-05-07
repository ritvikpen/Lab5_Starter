// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  function speak() {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
    if (textArea.value !== '') {
      faceImage.src = 'assets/images/smiling-open.png';
      const utterThis = new SpeechSynthesisUtterance(textArea.value);
      utterThis.voice = synth.getVoices().find((voice) => voice.name === voiceSelect.value);
      synth.speak(utterThis);
      utterThis.onend = function (event) {
        faceImage.src = 'assets/images/smiling.png';
      };
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', speak);
}