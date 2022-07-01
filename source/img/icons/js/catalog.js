import {createNew, addByMenu} from '/js/pattern.js';

const catalogProductItems = document.querySelectorAll('.bosh');

const sortCollection = document.getElementsByClassName('sort-prop');
const catalogSort = document.querySelector('.catalog_sort');
const arrowSortCollection = catalogSort.getElementsByClassName('fa-solid');



const pugItems = document.querySelectorAll('.pug');

//Hover buy

for (let i = 0; i < catalogProductItems.length; i++) {
    addByMenu(catalogProductItems[i]);
} 

// New Product
createNew(document.querySelector('.bosh_2'));
createNew(document.querySelector('.bosh_4'));
//
function addSortListener(item) {
    item.addEventListener('click', function(evt) {
        evt.preventDefault();
        for (let i = 0; i < sortCollection.length; i++) {
            if (sortCollection[i].classList.contains('sort-active')) {
                sortCollection[i].classList.remove('sort-active');
            }
        }
        item.classList.add('sort-active');
    })
}
for (let i = 0; i < sortCollection.length; i++) {
    addSortListener(sortCollection[i]);
}

function addSortArrowListener(item) {
    item.addEventListener('click', function(evt) {
        evt.preventDefault();
        for (let i = 0; i < arrowSortCollection.length; i++) {
            if (arrowSortCollection[i].classList.contains('fa-sort-red')) {
                arrowSortCollection[i].classList.remove('fa-sort-red');
            }
        }
        item.classList.add('fa-sort-red');
    })
}

for (let i = 0; i < arrowSortCollection.length; i++) {
    addSortArrowListener(arrowSortCollection[i]);
}