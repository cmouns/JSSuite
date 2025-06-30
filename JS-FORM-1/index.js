// Calculatrice
// let firstNumber = document.getElementById('firstNumber')
// let secondNumber = document.getElementById('secondNumber')
// let result = document.getElementById('result')
// let myBouton = document.getElementById('myButton')





// myBouton.addEventListener('click', () =>{


// var nombre1 = parseInt(firstNumber.value)
// var nombre2 = parseInt(secondNumber.value)
// result.value= nombre1 + nombre2
// })


// ---------- EXO AFFICHER/CACHER
// var element = document.getElementById('second');
// element.classList.remove('hidden')

//CACHER LES SPOILERS
// var elements = document.getElementsByClassName('spoiler');

// let bouton = document.getElementById('spoil')

// bouton.addEventListener('click', () =>{
// for (var i = 0; i < elements.length; i++) {
//   var element = elements[i];
//   element.classList.add('hidden');
// }
// console.log(element)

// })


var elements = document.getElementsByTagName("p")
var button = document.getElementById('button');

for(let i=0; i<elements.length;i++){
elements[i].addEventListener('click', (e) =>{ 
e.target.style.backgroundColor = "yellow";
})
}

button.addEventListener('click', () =>{
for(let i=0; i<elements.length;i++){
    elements[i].style.backgroundColor = "yellow";
}
})


