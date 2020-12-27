const updateContainer = (container, inner, selected, opt) => {
    if (selected.length > 0) {
        container.value = selected.join(',');
        inner.innerText = selected.join(', ');
    } else {
        container.value = '';
        inner.innerText = opt[0].innerText;
    }
    container.dispatchEvent(new window.Event('change', {bubbles: true}));
};
const buttonToggle = (display, dropdown) => {
    display.classList.toggle('multi__dropdown--toggle');
    dropdown.classList.toggle('multi--hidden');
};
const map = {};
let multi_idx = 0;
const multiSelect = () => {
    Array.from(document.querySelectorAll('.multi'))
        .filter((multi) => {
            return multi.getAttribute('data-multiselect-initialized') === null;
        })
        .forEach((el) => {
            // stores values of dropdown
            map[multi_idx] = [];
            // array of options
            const {options: opt} = el;
            // create container
            const container = document.createElement('div');
            // carry over classes
            el.classList.forEach((className) => {
                container.classList.add(className);
            });

            // Add data-multiselect-initialized attribute
            container.setAttribute('data-multiselect-initialized', true);
            container.setAttribute('key', multi_idx);
            const key = multi_idx;
            // carry over ids if exist
            // container.id = el.id;
            el.id ? (container.id = el.id) : '';
            // carry over names
            el.getAttribute('name')
                ? container.setAttribute('name', el.getAttribute('name'))
                : '';
            el.getAttribute('onchange')
                ? container.setAttribute('onchange', el.getAttribute('onchange'))
                : '';

            // create display
            const display = document.createElement('button');
            display.classList.add('multi__display');
            display.type = 'button';

            // create inner (displays the values)
            const inner = document.createElement('div');
            inner.classList.add('multi__inner');

            // set innerText to default value
            inner.innerText = opt[0].innerText;
            display.value = '';
            // append display to container
            container.appendChild(display);
            display.appendChild(inner);

            // replace new select element with new container
            el.parentNode.replaceChild(container, el);

            // create dropdown
            const dropdown = document.createElement('div');
            dropdown.classList.add('multi__dropdown');
            // create ul
            const list = document.createElement('ul');
            dropdown.classList.add('multi--hidden');
            // iterate over options, skip first (placeholder)
            for (let i = 1; i < opt.length; i++) {
                const li = document.createElement('li');
                li.classList.add('multi__li-item');
                // ACCESSIBILITY
                li.innerText = opt[i].innerText;
                // Edit by DonatasP
                li.setAttribute('data-id', opt[i].value);
                if (opt[i].selected) {
                    $(li).addClass('multi__li-item--selected');
                }
                $(li).on('click', function (e) {
                    e.stopPropagation();
                    if ($(this).hasClass('multi__li-item--selected')) {
                        map[key].splice(map[key].indexOf(e.target.innerText), 1);
                        $(this).removeClass('multi__li-item--selected');
                    } else {
                        map[key].push(e.target.innerText);
                        $(this).addClass('multi__li-item--selected');
                    }
                    updateContainer(container, inner, map[key], opt);
                });
                // li.appendChild(a);
                list.appendChild(li);
            }
            // add event listener to container to show / hide dropdown
            container.addEventListener('click', (e) => {
                e.stopPropagation();
                buttonToggle(display, dropdown);
            });
            // append dropdown to container
            container.appendChild(dropdown);
            // append ul to dropdown
            dropdown.appendChild(list);
        });
    // }
    multi_idx++;
};
// add event listener to window
document.addEventListener('click', (e) => {
    document.querySelectorAll('.multi__display').forEach((display) => {
        display.classList.remove('multi__dropdown--toggle');
    });

    document.querySelectorAll('.multi__dropdown').forEach((dropdown) => {
        dropdown.classList.add('multi--hidden');
    });
});
// // https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
document.addEventListener('DOMContentLoaded', function (event) {
    //do work
    multiSelect();
});

// Refresh Method
window.multiSelect = {
    refresh() {
        multiSelect();
    },
};
