const audioElement = document.getElementById('audioElement');
const toggleSoundButton = document.getElementById('toggleSound');

let isSoundOn = true;

toggleSoundButton.addEventListener('click', () => {
  if (isSoundOn) {
    audioElement.pause();
    toggleSoundButton.textContent = 'Encender Sonido';
  } else {
    audioElement.play();
    toggleSoundButton.textContent = 'Apagar Sonido';
  }
  
  isSoundOn = !isSoundOn;
});
  

