// when i click on .item a function does something 
// fds is function action
// fds adds 'open' class to overlay div so to make apear
//when i click on .close a function close the overlay div

const galleryItem = document.querySelector('.item');
const overlay = document.querySelector('.overlay')
const overlayClose = overlay.querySelector('.close');
const overlayImg = overlay.querySelector('img');

function open(event) {
  const currentImgSrc = event.currentTarget.querySelector('img').src;
  overlayImg.src = currentImgSrc;
  overlay.classList.add('open');
 }

function close() {
   overlay.classList.remove('open');
}
const items =  document.querySelectorAll('.gallery__item');
items.forEach(item => item.addEventListener('click', open));
overlayClose.addEventListener('click', close);


// pseudocoding
// instead of 20: event defined for one item we want an array of ALL items 
//THEN we create an event for EACH item in the array

//since overlay img source is not defined we want to assign current clicked image src to overlay img src
//first we store overlay img src and then we 'capture' item img source with .currentTarget js method