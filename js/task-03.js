console.info('')
console.info('task 03')

const findLongestWord = function(string) {
  // твой код
    const array = string.split(' ')

    let element = array[0]
    
    // console.info('')  
    console.info(`| іт. | слово  | має символів |`)  

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i], ' = ', array[i].length)
        // console.log(element, ' = ', element.length)

        if (array[i].length > element.length) element = array[i]
       
        console.info(`|  ${i}  | ${array[i]} | ${array[i].length} |`)      
    }
    
    return `най більше слово "${element}", (має ${element.length} символів)`
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'