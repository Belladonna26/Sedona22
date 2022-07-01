window.onload = function() {
    rangeSlideOne();
    rangeSlideTwo();
}

const blockStartPrice = document.querySelector('.priceStart');
const blockFinishPrice = document.querySelector('.priceFinish');
const startPriceValue = document.getElementById('price-start');
const finishPriceValue = document.getElementById('price-finish');
const sliderTrack = document.querySelector('.slider-track');

let sliderTrackMax = startPriceValue.max;

let minGap = 0;

function rangeSlideOne() {
    if (parseInt(finishPriceValue.value) - parseInt(startPriceValue.value) <= minGap) {
        startPriceValue.value = parseInt(finishPriceValue.value) - minGap;
    }

    blockStartPrice.textContent = startPriceValue.value;
    rangeSliderFill();
}

function rangeSlideTwo() {
    if (parseInt(finishPriceValue.value) - parseInt(startPriceValue.value) <= minGap) {
        finishPriceValue.value = parseInt(startPriceValue.value) + minGap;
    }
    blockFinishPrice.textContent = finishPriceValue.value;
    rangeSliderFill();
}

function rangeSliderFill() {
    let percentStartValue = (startPriceValue.value / sliderTrackMax) * 100;
    let percentFinishValue = (finishPriceValue.value / sliderTrackMax) * 100;

    sliderTrack.style.background = `linear-gradient(to right,
        #D7DCDE, #D7DCDE ${percentStartValue}%, 
        rgb(16, 199, 16) ${percentStartValue}%, 
        rgb(16, 199, 16) ${percentFinishValue}%,
        #D7DCDE ${percentFinishValue}%`;
}