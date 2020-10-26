const updateContainer = (container,inner, selected, opt) => {
    if (selected.length > 0) {
        container.value = selected.join(',');
        inner.innerText = selected.join(', ');
    } else {
        container.value = "";
        inner.innerText = opt[0].innerText;
    }
    container.onchange();
}
const map = {};
const multiSelect = () => {
    document.querySelectorAll('.multi').forEach((el, idx) => {
        // stores values of dropdown
        map[idx] = [];
        // array of options
        const { options: opt } = el;
        // create container
        const container = document.createElement('div');
        // carry over classes
        el.classList.forEach(className => {
            container.classList.add(className);
        })
        // carry over ids if exist
        // container.id = el.id;
        el.id ? container.id = el.id : '';
        // carry over names
        el.getAttribute('name') ? container.setAttribute('name', el.getAttribute('name')) : '';
        el.getAttribute('onchange') ? container.setAttribute('onchange', el.getAttribute('onchange')) : '';
        // container.setAttribute('name', el.getAttribute('name') || '');
        // container.classList.add('multi')

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

        // replace new select element with new container
        el.parentNode.replaceChild(container, el);

        // create dropdown
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown')
        // create ul
        const list = document.createElement('ul');
        dropdown.classList.add('hidden');
        // iterate over options, skip first (placeholder)
        for (let i = 1; i < opt.length; i++) {
            const li = document.createElement('li');
            li.classList.add('item');
            // ACCESSIBILITY
            // const a = document.createElement('a');
            // a.classList.add('item-anchor');
            // a.setAttribute('role','option');
            // a.setAttribute('tabindex','0');
            // a.innerText=opt[i].innerText
            li.innerText=opt[i].innerText;
            li.addEventListener('click', e => {
                e.stopPropagation();
                if (map[idx].includes(e.target.innerText)) {
                    map[idx].splice(map[idx].indexOf(e.target.innerText), 1);
                    e.target.classList.remove('selected');
                }else {
                    map[idx].push(e.target.innerText);
                    e.target.classList.add('selected');
                }
                // e.target.parentElement.removeChild(e.target);
                updateContainer(container, inner, map[idx], opt);
            })
            // li.appendChild(a);
            list.appendChild(li);
        }
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
    })
    // add event listener to window
    document.addEventListener('click', e => {
        document.querySelectorAll('.display').forEach((display) => {
            display.classList.remove('dropdown-toggle');
        })

        document.querySelectorAll('.dropdown').forEach((dropdown) => {
            dropdown.classList.add('hidden');
        })
    })
}
// https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    multiSelect()
  });