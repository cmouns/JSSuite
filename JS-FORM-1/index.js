
let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')
let result = document.getElementById('result')
let myBouton = document.getElementById('myButton')



firstNumber.addEventListener('change', () =>{
    firstNumbertest = firstNumber.value
})
secondNumber.addEventListener('change', () =>{
    secondNumbertest = secondNumber.value
})

myBouton.addEventListener('click', () =>{

    result.value= parseInt(firstNumbertest) + parseInt(secondNumbertest)
    console.log(firstNumbertest +" "+ secondNumbertest)
})