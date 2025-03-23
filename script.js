document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.player-controls .play');
  
  playButton.addEventListener('click', () => {
    if (playButton.textContent.trim() === '▶') {
      playButton.textContent = '⏸';
    } else {
      playButton.textContent = '▶';
    }
  });
});
