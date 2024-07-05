'use strict'


  function addclass() {
    const elem = document.getElementById('para');

    elem.className = document.getElementById('type').value;
  }





function toggleVisibility(paragraph){
document.getElementById(paragraph).classList.toggle('show');
}


function click(xx){
xx.textContent='clicked!';
xx.style.pointerEvents='none';

}