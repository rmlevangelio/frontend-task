***Please do a fresh install again :)***

# Frontend task

To run this project:
1. Go inside the project folder.
2. Run `yarn install` to install required dependencies
3. Run `yarn run start` to start the development server.
4. Open `localhost:1234` on your browser.

### Map
```js
  Array.prototype.map = function map(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, newArr));
    }

    return newArr;
  };
```

### Filter
```js
  Array.prototype.filter = function filter(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, newArr);
      if (result) {
        newArr.push(result);
      }
    }

    return newArr;
  };
```

### Reduce
```js
  Array.prototype.reduce = function reduce(reducer, initialValue) {
    let accumulator = initialValue === undefined || initialValue === null ? 0 : initialValue;

    for (let i = 0; i < this.length; i++) {
      accumulator = reducer(accumulator, this[i], i, this);
    }

    return accumulator;
  };
```

&copy; Rem Evangelio
