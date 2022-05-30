import "core-js/stable";

let name = "ZhangSan";

const age = 18;

const add = (x, y) => x + y;
console.log(add(1,1));

new Promise((resolve, reject) => {
  resolve("成功");
}).then((value) => {
  console.log(value);
});

console.log(Array.from([1, 2]));

class Person {
  constructor(name, age) {
    Object.assign(this, { name, age });
  }
}

new Person("ZhangSan", 18);
