console.info('')
console.info('task 06')

let input;
const numbers = [];
let total = 0;

const totolNum = (arrey) => {
    total = 0
     arrey.forEach(element => {
        total += element
     });
    return total
}

const promptArrey = () => {
    const input = prompt(`введіть число, \n зараз це число = ${total}`)
   

    if (input === null) {
        console.log(`Общая сумма чисел равна ${total}`)
        return alert(`Общая сумма чисел равна ${total}`)
    }

    if (Number(input.trim())) {

        numbers.push(Number(input))
        total = totolNum(numbers)
        console.log('введено число', input)
        promptArrey()
    } else {
        alert('вводьте тільки цифри!')
        promptArrey()
    }

    
}

promptArrey()
