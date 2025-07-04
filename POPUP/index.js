
// POP UP // 
// Affiche la pop-up automatiquement au chargement de la page
// let popup = document.getElementById('popup');
    


// window.onload = function() {
//     popup.classList.add('active');
//     console.log(popup);
// }
// let button = document.getElementById('closeBtn')
// button.onclick = function() {
//     popup.classList.remove('active');
// }
// exo 10--------------
// function filtrage(camp) {
//     var articles = document.querySelectorAll('#products article');
//     articles.forEach(personnage => {
//         if (camp === 'all' || personnage.classList.contains(camp)) {
//             personnage.classList.remove('hide');
//         } else {
//             personnage.classList.add('hide');
//         }
//     });
// }

// exo 11

// let button = document.getElementsByTagName('button');
// for(let i=0;i<button.length; i++)
// button[i].addEventListener('click', (e) =>{
//     let target= e.target.parentNode;
//     target.style.backgroundColor = 'red';

// }) 


// EXO 11 Suite----------
var input = document.createElement('input');
document.body.appendChild(input);

var button = document.createElement('button');
var textButton = document.createTextNode('Vider le champ');
button.appendChild(textButton);
document.body.appendChild(button);

button.addEventListener('click', () =>{
    input.value ="";
});

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})

button.addEventListener('click', () =>{
});
