console.info('')
console.info('task 01')



const logItems = (array = []) => {    
    
    console.info('// шаблон [номер элемента] - [значение элемента]')
    let element = ''
    for (let i = 0; i < array.length; i++) {
        element += `[${i+1}] - [${array[i]}] \n`        
    }
    return  console.log(element)
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);