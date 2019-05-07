/*
Есть стоимость в виде строки: `"$120"`. То есть, первым идёт знак валюты, а затем – число.

Создайте функцию `extractCurrencyValue(str)`, которая будет из такой строки выделять число-значение, в данном случае 120.

Обратите внимание что нужно возвращать не строку 120 а именно число 120

```javascript
extractCurrencyValue('$120'); // 120
```

*/

const extractCurrencyValue = str => Number(str.match(/\d/g).join(''));

console.log(extractCurrencyValue('$120')); // 120;
