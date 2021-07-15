console.info('')
console.info('task 05')

const SPAM = 'spam'
const SALE = 'sale'


const checkForSpam = function(message) {
  // твой код
     message = message.replace(/[&[\]/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase().split(' ')
    // console.log(message)   
    for (const i of message) {
        // console.log('i = ', i)
        if (i === SPAM || i === SALE)  return true            
    }
    return false   
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true