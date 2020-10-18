console.log('🌴');
const el = document.querySelector('.multi');
// array of options
const { options: opt } = el;
console.log(opt);
const container = document.createElement('div');
// set innerText to default value
container.innerText = opt[0].innerText;
console.log(container);
// insert container
// el.insertAdjacentHTML('beforebegin', container);
document.querySelector('#root').appendChild(container);
// remove select field
el.parentElement.removeChild(el);
