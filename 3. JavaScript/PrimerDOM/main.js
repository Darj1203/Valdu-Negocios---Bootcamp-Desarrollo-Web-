//Seleccionar los elementos

const btnIncrementar = document.querySelector('.incrementar');
const btnDecrementar = document.querySelector('.decrementar');
const btnRojo = document.querySelector('.rojo')
const btnReset = document.querySelector('.reset');
const text = document.getElementById('texto')

/*
const titulos = [];

for (let i=0; i=3; i++) {
    titulos.push(document.getElementsByTagName('h1')[i]);
  } 
*/

let tamano = 34;
let color = 'white'

//Vamos a usar los eventos

btnIncrementar.addEventListener('click', () => {
    tamano += 10;
    text.style.fontSize = `${tamano}px`;
});

btnDecrementar.addEventListener('click', ()=>{
    tamano -= 10;
    text.style.fontSize = `${tamano}px`;
})

btnRojo.addEventListener('click', ()=>{
  color = 'red';
  text.style.color = `${color}`;
});

btnReset.addEventListener('click', ()=>{
  color='white';
  tamano = 34;
  text.style.color = `${color}`;
  text.style.fontSize = `${tamano}px`;  
});
