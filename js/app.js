const updateContainer = (display,inner, selected, opt) => {
    if (selected.length > 0) {
        display.value = selected.join(', ');
        inner.innerText = selected.join(', ');
    } else {
        display.value = "";
        inner.innerText = opt[0].innerText;
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
const display = document.createElement('button');
display.classList.add('display');

// create inner (displays the values)
const inner = document.createElement('div');
inner.classList.add('inner');

// set innerText to default value
// display.innerText = opt[0].innerText
inner.innerText = opt[0].innerText
display.value = ""
// append display to container
container.appendChild(display);
display.appendChild(inner);
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
dropdown.classList.add('hidden');
// iterate over options, skip first (placeholder)
for (let i = 1; i < opt.length; i++) {
    // console.log(opt[i].innerText);
    const li = document.createElement('li');
    li.classList.add('item');
    // ACCESSIBILITY
    const a = document.createElement('a');
    a.classList.add('item-anchor');
    a.setAttribute('role','option');
    a.setAttribute('tabindex','0');
    a.innerText=opt[i].innerText
    li.addEventListener('click', e => {
        e.stopPropagation();
        if (selected.includes(e.target.innerText)) {
            selected.splice(selected.indexOf(e.target.innerText), 1);
            e.target.classList.remove('selected');
        }else {
            selected.push(e.target.innerText);
            e.target.classList.add('selected');
        }
        // e.target.parentElement.removeChild(e.target);
        updateContainer(display, inner, selected, opt);
    })
    li.appendChild(a);
    list.appendChild(li);
}
// add event listener to window
document.addEventListener('click', e => {
    display.classList.remove('dropdown-toggle');
    dropdown.classList.add('hidden');
})
// add event listener to container to show / hide dropdown
container.addEventListener('click', e => {
    e.stopPropagation();
    display.classList.toggle('dropdown-toggle');
    dropdown.classList.toggle('hidden');
})


// append dropdown to container
container.appendChild(dropdown)
// append ul to dropdown
dropdown.appendChild(list);
// remove select field
el.parentElement.removeChild(el);

// const button = document.createElement('button');
// button.style.backgroundImage="url(./svg/angle-down-light.svg)";
// document.querySelector('#root').appendChild(button);