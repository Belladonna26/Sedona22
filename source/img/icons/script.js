import {createNew, addByMenu} from '/js/pattern.js';

const productItems = document.querySelectorAll('.bosh');

const popupClose = document.querySelector('.button_close');

const mapPopup = document.querySelector('.popup_map');

const mapPopupOpen = document.querySelector('.map');

popupClose.addEventListener('click', function(evt) {
    mapPopup.classList.remove('visible_popup');
});

mapPopupOpen.addEventListener('click', function(evt) {
    mapPopup.classList.add('visible_popup');
})



createNew(document.querySelector('.bosh_2'));
createNew(document.querySelector('.bosh_4'));
createNew(document.querySelector('.material'));

for (let i = 0; i < productItems.length; i++) {
    addByMenu(productItems[i]);
}

function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include('/js/slider.js');
include('/js/service_slaider.js');






