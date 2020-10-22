console.log('🌴');
const el = document.querySelector('.multi');
// array of options
const { options: opt } = el;

const container = document.createElement('div');
container.classList.add('container')
// set innerText to default value
container.innerText = opt[0].innerText;
console.log(container);
// insert container
// el.insertAdjacentHTML('beforebegin', container);
document.querySelector('#root').appendChild(container);
// create container
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown')
// create ul
const list = document.createElement('ul');
// iterate over options, skip first (placeholder)
for (let i = 1; i < opt.length; i++) {
    // console.log(opt[i].innerText);
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText=opt[i].innerText
    list.appendChild(li);
}
// append dropdown to container
container.appendChild(dropdown)
// append ul to dropdown
dropdown.appendChild(list);
// remove select field
el.parentElement.removeChild(el);
