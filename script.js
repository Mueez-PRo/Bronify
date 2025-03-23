document.addEventListener('DOMContentLoaded', () => {
  // Toggle play/pause icon functionality
  const playButton = document.querySelector('.player-controls .play');
  playButton.addEventListener('click', () => {
    playButton.textContent = playButton.textContent.trim() === '▶' ? '⏸' : '▶';
  });
  
  // Update bottom play bar when a song card is clicked
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Retrieve the image, title, and artist from the clicked card
      const cardImg = card.querySelector('img').getAttribute('src');
      const songTitle = card.querySelector('.card-info h3').textContent;
      const songArtist = card.querySelector('.card-info p').textContent;
      
      // Update the bottom play bar with the new song information
      const nowPlayingImg = document.querySelector('.track-info img');
      const nowPlayingTitle = document.querySelector('.track-details .track-title');
      const nowPlayingArtist = document.querySelector('.track-details .track-artist');
      
      nowPlayingImg.setAttribute('src', cardImg);
      nowPlayingTitle.textContent = songTitle;
      nowPlayingArtist.textContent = songArtist;
    });
  });
});
