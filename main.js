//Caching DOM
let hex_span = document.getElementById('hex');
const clickMe_button = document.getElementById('clickMe');
const body = document.getElementsByName('body');

//JS Variables
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hex = '#';

function changeHex() {

  for(let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];

  }


  hex_span.innerText = hex;
  document.body.style.backgroundColor = hex;
}


//event listener
clickMe_button.addEventListener('click',  function() {
  hex = '#';
  changeHex();
});


