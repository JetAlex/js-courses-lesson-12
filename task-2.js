/*
Напишите функцию `checkSpam(str, example)`, которая возвращает `true`, если строка `str` содержит `example`, а иначе `false`.

Функция должна быть нечувствительна к регистру:

```javascript
checkSpam('pitterXXX@gmail.com', 'xxx') // true
checkSpam('pitterxxx@gmail.com', 'XXX') // true
```
*/

const checkSpam = (str, example) => str.indexOf(example) === -1;

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));// true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

