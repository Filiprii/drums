
function playSound(event) {
    const key = event.type === 'keydown' ? event.keyCode : event.target.dataset.key;
  
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  
    if (!audio) return; 
    audio.currentTime = 0; 
    audio.play();
  
    if (keyElement) {
      keyElement.classList.add('playing');
      setTimeout(() => keyElement.classList.remove('playing'), 200);
    }
  }
  
  window.addEventListener('keydown', playSound);
  
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', playSound);
  });
  