// when i click on .item a function does something 
// fds is function action
// fds adds 'open' class to overlay div so to make apear
//when i click on .close a function close the overlay div

const galleryItem = document.querySelector('.item');
const overlay = document.querySelector('.overlay')
const overlayClose = overlay.querySelector('.close');


function open() {
   overlay.classList.add('open');
 
}
function close() {
   overlay.classList.remove('open');

}

galleryItem.addEventListener('click', open);
overlayClose.addEventListener('click', close);


// pseudocoding
// instead of 20: event defined for one item we want an array of ALL item 
//THEN we create an event for EACH item in the array