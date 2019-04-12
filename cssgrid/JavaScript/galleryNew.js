const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick(e) {
  const imageSource = e.currentTarget.querySelector('img').src;
  overlayImage.src = imageSource;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const items = document.querySelectorAll('.item'); 
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);


