// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  hornSelect.addEventListener('change', (event) => {
    audioElement.src = `assets/audio/${event.target.value}.mp3`;
  });

  volumeControl.addEventListener('input', (event) => {
    audioElement.volume = event.target.value / 100;
  });

  playButton.addEventListener('click', (event) => {
    audioElement.play();
  });
}