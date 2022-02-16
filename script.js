/* Referencias de páginas usadas como pesquisa.
  https://www.w3schools.com/css/css3_buttons.asp    //Estilizar botão
  https://www.geeksforgeeks.org/how-to-make-div-height-expand-with-its-content-using-css/       //Aumentar o height da div conforme for adicionando <li> dentro de <ol>
  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  https://www.w3schools.com/jsref/met_element_removeattribute.asp#:~:text=The%20removeAttribute()%20method%20removes,result%20will%20be%20the%20same.
  https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript //Requisito 10
*/

function addNewLi() {
  const positionButton = document.querySelector('#criar-tarefa');
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

function clickChangeBg() {
  const positionOl = document.querySelector('#lista-tarefas');
  positionOl.addEventListener('click',function (event) {
    let positionLi = document.querySelector('#lista-tarefas').childNodes;
    for (let i = 0; i < positionLi.length; i += 1) {
      positionLi[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'gray';
  });
}
clickChangeBg();

function markTask() {
  const positionOl = document.querySelector('#lista-tarefas');
  positionOl.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

markTask();

function clearTask() {
  const positionButton = document.querySelector('#apaga-tudo');
  positionButton.addEventListener('click', function () {
    let positionsOl = document.querySelector('#lista-tarefas');
    positionsOl.innerHTML = '';
  })
}

clearTask();

// function clearTaskDone() {
//   const positionButton = document.querySelector('#remover-finalizados');
//   positionButton.addEventListener('click', function () {
//     let positionLiRisked
//   });
// }