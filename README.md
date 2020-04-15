# Frontend task

To run this project:
1. Go inside the project folder.
2. Run `yarn install` to install required dependencies
3. Run `yarn run start` to start the development server.
4. Open `localhost:1234` on your browser.

### Map
```js
  Array.prototype.map = function map(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], i, newArr));
    }

    return newArr;
  };
```

### Filter
```js
  Array.prototype.filter = function filter(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      const result = callback(arr[i], i, newArr);
      if (result) {
        newArr.push(result);
      }
    }

    return newArr;
  };
```

&copy; Rem Evangelio
