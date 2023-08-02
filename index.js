let resultElement = document.querySelector('.result-input')
let inputOne = document.querySelector('.input-one')
const inputTwo = document.querySelector('.input-two')
const btnInc = document.querySelector('.inc')
const btnDec = document.querySelector('.dec')
const buttonRes = document.querySelector('.result')
let action = '+';


// Получает знак ( плюс или минус)
btnInc.addEventListener('click', () => {
    action = '+'
})
btnDec.addEventListener('click', () => {
    action = '-'
})


// Получаем результат и окрышиваем в разный цвет
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}


// Функция принимает параметрами два инпута и action ( знак плюс или минус)
function computeNubersWitAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)

    // Применение тернарных операторов
    return actionSymbol == '+' ? num1 + num2 : num1 - num2

    // С помощью if else
    // if (actionSymbol == '+') {
    //     return num1 + num2
    // } else if (actionSymbol == '-') {
    //     return num1 - num2
    // }

}

// При клике по кнопке выводим результат
buttonRes.addEventListener('click', (event) => {
    event.preventDefault()
    const result = computeNubersWitAction(inputOne, inputTwo, action)
    printResult(result)
   
})











