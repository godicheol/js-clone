## Usage

```js
var obj = {
    name: "James",
    age: 1,
    images: [1, 2, "g", "c"],
    attrs: [
        {
            width: 10,
            height: 10,
        }, {
            width: 100,
            height: 100,
        }, {
            width: {
                value: 10
            },
            height: {
                value: 10
            }
        }
    ],
    deep1: {
        deep2: {
            deep3: {
                deep4: {
                    deep5: {
                        value: 100
                    }
                }
            }
        }
    }
}

jsClone.exec(obj); // return { ... }
```