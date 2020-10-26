# multiSelect.js :sparkles:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![\[Zero Dependencies\]()](https://img.shields.io/badge/Dependencies-0-blue.svg)
![\[Size\]()](https://img.shields.io/badge/Size-7%20KB-green.svg)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/TarekRaafat/autoComplete.js)



> Simple multi-select pure vanilla Javascript library. <a href="https://codepen.io/kleimaj/pen/mdEWVGb" target="\_blank">:rocket: Live Demo</a> **v1.0.7**

multiSelect.js is a simple, pure vanilla Javascript library that's progressively designed for easy integration for any type of project or system. The design was heavily influenced by that of the Bootstrap and Semantic-UI multi-select elements.

## Features

-   Pure Vanilla Javascript
-   Zero Dependencies
-   Simple & Easy to use
-   Extremely Lightweight
-   Blazing Fast
-   Versatile


## Installation

-   <img src="https://www.jsdelivr.com/img/logo@2x.png" alt="jsDelivr" width="100px">CDN

`CSS`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@kleimaj/multiselect.js@1.0.7/css/style.min.css">
```

`JS`

```html
<script src="https://cdn.jsdelivr.net/npm/@kleimaj/multiselect.js@1.0.7/js/multiselect.min.js"></script>
```

```html
<select class="multi">
        <option value="" disabled selected>Select your option</option>
        <option value="Bananas">Bananas</option>
        <option value="Apples">Apples</option>
        <option value="Peaches">Peaches</option>
</select>
```
<!-- 
```javascript
// invoke multiSelect()
multiSelect();
``` -->

> It's essential that you name the class `multi` and set an initial option to `selected`, `disabled`, this will act as the placeholder value.

<img src="https://i.imgur.com/TdH3u2P.png" alt="Example Implementation"/>

* To get the values of the multi-select, you can do the following:
```javascript
const vals = document.querySelector('.multi').value;
console.log(vals); // "Banana,Apples,..."
// parse as an array
vals.split(','); // [Bananas, Apples, ...]
```

## Support

For general questions about autoComplete.js, tweet at [@kleimaj].

For technical questions, you should post a question on [Stack Overflow] and tag
it with [multiSelect.js][so tag].

<!-- section links -->

[stack overflow]: https://stackoverflow.com/

[@kleimaj]: https://twitter.com/kleimaj

[so tag]: https://stackoverflow.com/questions/tagged/multiSelect.js

* * *

## Author

**Jacob Kleiman**

-   Email: jacobakleiman@gmail.com
-   Website: <https://jacobkleiman.com/>
-   Github: <https://github.com/kleimaj/>

Distributed under the MIT license. See `MIT` for more information.

* * *
