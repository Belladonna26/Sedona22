const slider = document.querySelector('.slider_visible_container');
const sliderButtonLeft = slider.querySelector('.fa-angle-left');
const sliderButtonRight = slider.querySelector('.fa-angle-right');
const sliderMoveBlock = slider.querySelector('.slider_moved_block');
const staiderBox = slider.querySelector('.staider_box');
const sliderItems = sliderMoveBlock.children; //querySelectorAll - static collection
const itemsCount = sliderItems.length;
const staiderItems = staiderBox.children;
const staiderCount = staiderItems.length;

let translateSize = sliderItems[0].offsetWidth;
let sliderWidth = slider.offsetWidth;

for(let i = 0; i < sliderItems; i++) {
    sliderItems[i].style.width = sliderWidth;
}

let position = 0;
let staiderCheck = 0;

sliderButtonLeft.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(position !== 0) {
        position += translateSize;
        sliderMoveBlock.style.transform = `translate(${position}px)`;
        staiderItems[staiderCheck].classList.remove('staider_active')
        staiderItems[staiderCheck - 1].classList.add('staider_active');
        staiderCheck--;
    }

})

sliderButtonRight.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(position !== -translateSize) {
        position -= translateSize;
        sliderMoveBlock.style.transform = `translate(${position}px)`;
        staiderItems[staiderCheck].classList.remove('staider_active')
        staiderItems[staiderCheck + 1].classList.add('staider_active');
        staiderCheck++;
    }
})

staiderBox.style.width = `${15 * itemsCount}px`;
staiderBox.style.left = `${(slider.offsetWidth - staiderBox.offsetWidth) / 2}px`;