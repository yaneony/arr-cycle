# arr-cycle
> Cycle thru all items in an array.

## Install
```
npm install arr-cycle
```

## Usage
```js
const Cycle = require('arr-cycle');

var items = new Cycle(['foo', 'bar', 'unicorn']);

items.curr();
items.prev();
items.next();
```
