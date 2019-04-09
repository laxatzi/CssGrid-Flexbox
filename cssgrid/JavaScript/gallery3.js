const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}
