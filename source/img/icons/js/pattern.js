//Input element NEW!!

export function createNew(item) {
    if (!(item.style.position === 'relative')) {
        item.style.position = 'relative';
    }
    let newDiv = document.createElement('div');
    newDiv.textContent = 'new';
    newDiv.classList.add('new');
    item.appendChild(newDiv);
}

export function addByMenu(item) {
    let template = document.querySelector('#template');

    let clone = template.content.cloneNode(true);

    item.appendChild(clone);
}

