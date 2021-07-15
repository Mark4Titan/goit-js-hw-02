console.info('')
console.info('task 04')

const leng = 40

const formatString = function (string) {
  // твой код
//   return  string.length > leng ? console.log('треба підрізати') : console.log('усе ок виводимо як є')
  return  string.length > leng ? string.substr(0, leng) + '...' : string
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка