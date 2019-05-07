/*
Напишите функцию `upperCaseFirst(str)`, которая возвращает строку `str` с заглавным первым символом.

```javascript
upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''
```
*/

const upperCaseFirst = str => str ? str[0].toUpperCase() + str.slice(1) : str;

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''

