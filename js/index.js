// addition
const add_1 = document.querySelector('#add_1')
const add_2 = document.querySelector('#add_2')
const add_result = document.querySelector('#add_result')

add_1.addEventListener('keyup', e => {
    calculate('sum')
})

add_2.addEventListener('keyup', e => {
    calculate('sum')
})


// subtraction
const subtract_1 = document.querySelector('#subtract_1')
const subtract_2 = document.querySelector('#subtract_2')
const subtract_result = document.querySelector('#subtract_result')

subtract_1.addEventListener('keyup', e => {
    calculate('subtract')
})

subtract_2.addEventListener('keyup', e => {
    calculate('subtract')
})


// multiplication
const multiply_1 = document.querySelector('#multiply_1')
const multiply_2 = document.querySelector('#multiply_2')
const multiply_result = document.querySelector('#multiply_result')

multiply_1.addEventListener('keyup', e => {
    calculate('multiply')
})

multiply_2.addEventListener('keyup', e => {
    calculate('multiply')
})


// subtraction
const divide_1 = document.querySelector('#divide_1')
const divide_2 = document.querySelector('#divide_2')
const divide_result = document.querySelector('#divide_result')

divide_1.addEventListener('keyup', e => {
    calculate('divide')
})

divide_2.addEventListener('keyup', e => {
    calculate('divide')
})


// modulo
const modulo_1 = document.querySelector('#modulo_1')
const modulo_2 = document.querySelector('#modulo_2')
const modulo_result = document.querySelector('#modulo_result')

modulo_1.addEventListener('keyup', e => {
    calculate('modulo')
})

modulo_2.addEventListener('keyup', e => {
    calculate('modulo')
})


function calculate(op) {
    switch (op) {
        case 'sum':
            add_result.value = Number(add_1.value) + Number(add_2.value) 
            break
        case 'subtract':
            subtract_result.value = Number(subtract_1.value) - Number(subtract_2.value)
            break
        case 'multiply':
            multiply_result.value = Number(multiply_1.value) * Number(multiply_2.value)
            break
        case 'divide':
            divide_result.value = Number(divide_1.value) / Number(divide_2.value)
            break
        case 'modulo':
            modulo_result.value = Number(modulo_1.value) % Number(modulo_2.value)
            break
    }
}

// const sum = () => {
//     add_result.value = Number(add_1.value) + Number(add_2.value)
// }
// const subtract = () => {
//     subtract_result.value = Number(subtract_1.value) - Number(subtract_2.value)
// }
// const multiply = () => {
//     multiply_result.value = Number(multiply_1.value) * Number(multiply_2.value)
// }
// const divide = () => {
//     divide_result.value = Number(divide_1.value) / Number(divide_2.value)
// }
// const modulo = () => {
//     modulo_result.value = Number(modulo_1.value) % Number(modulo_2.value)
// }



