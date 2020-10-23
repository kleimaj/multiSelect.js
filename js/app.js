const updateContainer = (display, selected, opt) => {
    if (selected.length > 0) {
        display.value = selected.join(', ');
    } else {
        display.value = opt[0].innerText;
    }
}
// console.log('🌴');
const el = document.querySelector('.multi');
// stores values of dropdown
const selected = [];
// array of options
const { options: opt } = el;

// create container
const container = document.createElement('div');
container.classList.add('container')

// create display
const display = document.createElement('input');
display.classList.add('display');
display.setAttribute('readonly','readonly');
// set innerText to default value
display.value = opt[0].innerText
// append display to container
container.appendChild(display);
// container.innerText = opt[0].innerText;
// console.log(container);
// insert container
// el.insertAdjacentHTML('beforebegin', container);
document.querySelector('#root').appendChild(container);
// create container
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown')
// create ul
const list = document.createElement('ul');
list.classList.add('hidden');
// iterate over options, skip first (placeholder)
for (let i = 1; i < opt.length; i++) {
    // console.log(opt[i].innerText);
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText=opt[i].innerText
    li.addEventListener('click', e => {
        if (selected.includes(e.target.innerText)) {
            selected.splice(selected.indexOf(e.target.innerText), 1);
            e.target.classList.remove('selected');
        }else {
            selected.push(e.target.innerText);
            e.target.classList.add('selected');
        }
        // e.target.parentElement.removeChild(e.target);
        updateContainer(display, selected, opt);
    })
    list.appendChild(li);
}
// add event listener to window
document.addEventListener('click', e => {
    list.classList.add('hidden');
})
// add event listener to container to show / hide dropdown
container.addEventListener('click', e => {
    e.stopPropagation();
    list.classList.toggle('hidden');
})


// append dropdown to container
container.appendChild(dropdown)
// append ul to dropdown
dropdown.appendChild(list);
// remove select field
el.parentElement.removeChild(el);
