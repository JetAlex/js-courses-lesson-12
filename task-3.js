/*
Создайте функцию `truncate(str, maxlength)`, которая проверяет длину строки `str`,
и если она превосходит `maxlength` – заменяет конец `str` на `"..."`, так чтобы ее длина стала равна `maxlength`.

Результатом функции должна быть (при необходимости) усечённая строка.

```javascript
truncate('Вот, что мне хотелось бы сказать на эту тему:', 21) // 'Вот, что мне хотел...'
```

*/

const truncate = (str, maxlength) => {
  const strLength = str.length;
  const replacer = '...';
  const replacerLength = replacer.length;

  return strLength > maxlength ? str.slice(0, maxlength - replacerLength) + replacer : str;
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
