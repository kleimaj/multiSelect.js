console.log('🌴');
const el = document.querySelector('.multi');
// stores values of dropdown
const selected = [];
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
list.classList.add('hidden');
// iterate over options, skip first (placeholder)
for (let i = 1; i < opt.length; i++) {
    // console.log(opt[i].innerText);
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText=opt[i].innerText
    li.addEventListener('click', e => {
        selected.push(e.target.innerText);
        e.target.parentElement.removeChild(e.target);
        
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
