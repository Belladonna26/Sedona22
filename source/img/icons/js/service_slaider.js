const serviceSlaider = document.querySelector('.service_slaider');
const sliderItemCollection = serviceSlaider.querySelectorAll('h3');
const sliderContent = document.querySelector('.service_slaider_content');
const sliderContentCollection = sliderContent.children;


function addListener(item, itemCont) {
    item.addEventListener('click', function() {
        for (let i = 0; i < sliderItemCollection.length; i++) {
            if (sliderItemCollection[i].classList.contains('service_slaider_item_active')) {
                sliderItemCollection[i].classList.remove('service_slaider_item_active');
                sliderItemCollection[i].classList.add('service_slaider_item');
                sliderContentCollection[i].classList.remove('service_content_active');
            }
        }
        item.classList.remove('service_slaider_item');
        item.classList.add('service_slaider_item_active');
        itemCont.classList.add('service_content_active');
    })
}

for (let i = 0; i < sliderItemCollection.length; i++) {
    addListener(sliderItemCollection[i], sliderContentCollection[i]);
}
