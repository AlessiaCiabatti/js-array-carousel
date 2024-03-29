// richiamo container di tutte le img: all-img
const allImg = document.querySelector('.all-images');
// adesso nel for concateno allImg += 

// 4
// richiamo bottoni
const sopra = document.querySelector('.sopra');
const sotto = document.querySelector('.sotto');

// contatore
let counterImg = 0;

// 2
// tutte le immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

// ciclo
for (let i = 0; i < images.length; i++){
  const img = images [i];
  // console.log(img)
  allImg.innerHTML += `<img class="foto hide" src="${img}">`
  // in questo modo ho tutte le immagini
}

// 3
// prendo tutte le immagini e devo dargli una classe direttamente qui su js: foto
const fotoCollection = document.getElementsByClassName('foto');
// getElementsByClassName restituisce un HTML COLLECTION: un array che come elementi contiene un elemento html

// identifico il primo elemento e tolgo hide
fotoCollection[0].classList.remove('hide');

// 4
// incremento bottone sotto
sotto.addEventListener('click', function(){
  // quando clicco la freccia aggiungo hide all'incremento
  fotoCollection[counterImg++].classList.add('hide');
  
  // se il contatore è maggiore o uguale alla lunghezza delle immagini, ritorna a 0
  if(counterImg >= fotoCollection.length){
    counterImg = 0;
  }

  // img corrente
  fotoCollection[counterImg].classList.remove('hide');
})


// decremento bottone sopra
sopra.addEventListener('click', function(){
  console.log(counterImg);
  
  // img corrente
  fotoCollection[counterImg].classList.add('hide');

  if(counterImg === 0){
    counterImg = images.length-1;
  }else{
    counterImg--;
  }

  // quando clicco la freccia aggiungo hide al decremento
  fotoCollection[counterImg].classList.remove('hide');
})
