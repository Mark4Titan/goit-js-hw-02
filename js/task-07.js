console.info('')
console.info('task 07')


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  // твой код
    if (login.length < 4 || login.length > 16) { return false} else { return true}
    //   login.length < 4 || login.length > 16 ? true : false  
};

const isLoginUnique = function(allLogins, login) {
  // твой код
  // перевірка
//   console.log(allLogins.some(elem => elem === login))    

    if (allLogins.some(elem => elem === login)) {
        return 'Такой логин уже используется!'
    } else {
      //додавання
        allLogins.push(login)
        return 'Логин успешно добавлен!'  
    }
    
};

const addLogin = function(allLogins, login) {
  // твой код
    const par = isLoginValid(login)
    if (par) { return isLoginUnique(allLogins, login) } else {
       return 'Ошибка! Логин должен быть от 4 до 16 символов'  
    }    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'