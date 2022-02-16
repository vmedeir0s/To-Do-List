/* Referencias de páginas usadas como pesquisa.
  https://www.w3schools.com/css/css3_buttons.asp    //Estilizar botão
  https://www.geeksforgeeks.org/how-to-make-div-height-expand-with-its-content-using-css/       //Aumentar o height da div conforme for adicionando <li> dentro de <ol>

*/

function addNewLi() {
  let positionButton = document.querySelector('#criar-tarefa');
  positionButton.addEventListener('click', function () {
    let positionOl = document.querySelector('#lista-tarefas');
    let valueInput = document.querySelector('#texto-tarefa');
    let newLi = document.createElement('li');
    newLi.innerText = valueInput.value;
    positionOl.appendChild(newLi);
    valueInput.value = '';
  })
}
addNewLi();
