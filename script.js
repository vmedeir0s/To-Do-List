/* Referencias de páginas usadas como pesquisa.
  https://www.w3schools.com/css/css3_buttons.asp



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
