/* Referencias de páginas usadas como pesquisa.
  https://www.w3schools.com/css/css3_buttons.asp    //Estilizar botão
  https://www.geeksforgeeks.org/how-to-make-div-height-expand-with-its-content-using-css/       //Aumentar o height da div conforme for adicionando <li> dentro de <ol>
  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  https://www.w3schools.com/jsref/met_element_removeattribute.asp#:~:text=The%20removeAttribute()%20method%20removes,result%20will%20be%20the%20same.
  https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript //Requisito 10
  https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
  https://www.w3schools.com/html/html5_webstorage.asp
  https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
*/
const positionOl = document.querySelector('#lista-tarefas');

function addNewLi() {
  const positionButton = document.querySelector('#criar-tarefa');
  positionButton.addEventListener('click', function () {
    const valueInput = document.querySelector('#texto-tarefa');
    const newLi = document.createElement('li');
    newLi.innerText = valueInput.value;
    positionOl.appendChild(newLi);
    valueInput.value = '';
  });
}
addNewLi();

function clickChangeBg() {
  positionOl.addEventListener('click', function (event) {
    const positionLi = document.querySelector('#lista-tarefas').childNodes;
    for (let i = 0; i < positionLi.length; i += 1) {
      positionLi[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
clickChangeBg();

function markTask() {
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
    const positionsOl = document.querySelector('#lista-tarefas');
    positionsOl.innerHTML = '';
  });
}

clearTask();

function clearTaskDone() {
  const positionButton = document.querySelector('#remover-finalizados');
  positionButton.addEventListener('click', function () {
    const positionLiRisked = document.querySelectorAll('.completed');
    for (let i = 0; i < positionLiRisked.length; i += 1) {
      positionOl.removeChild(positionLiRisked[i]);
    }
  });
}
clearTaskDone();

function saveTaskList() {
  const positionButton = document.querySelector('#salvar-tarefas');
  positionButton.addEventListener('click', function () {
    localStorage.setItem('liItens', positionOl.innerHTML);
  });
}
saveTaskList();

function removeSelected() {
  const positionButton = document.querySelector('#remover-selecionado');
  positionButton.addEventListener('click', function () {
    const posSelect = document.querySelector('.selected');
    if (posSelect != undefined && posSelect != '' && posSelect != 0 && posSelect != null) {
      positionOl.removeChild(posSelect);
    }
  });
}
removeSelected();

function moveSelected() {
  const positionButtonUp = document.querySelector('#mover-cima');
  const positionButtonDown = document.querySelector('#mover-baixo');
   positionButtonUp.addEventListener('click', function () {
    let posSelect = document.querySelector('.selected');
    
    if (posSelect != undefined && posSelect != '' && posSelect != 0 && posSelect != null) {
      let previousPos = posSelect.previousElementSibling
      if(previousPos != undefined && previousPos != '' && previousPos != 0 && previousPos != null){
        posSelect.parentNode.insertBefore(posSelect,previousPos);
      }
    }
   });
   positionButtonDown.addEventListener('click', function () {
    let posSelect = document.querySelector('.selected');
    
    if (posSelect != undefined && posSelect != '' && posSelect != 0 && posSelect != null) {
      let nextPos = posSelect.nextElementSibling;
      if(nextPos != undefined && nextPos != '' && nextPos != 0 && nextPos != null){
        posSelect.parentNode.insertBefore(posSelect.nextElementSibling, posSelect);
      }
    }
   })
}

moveSelected();

window.onload = function () {
  positionOl.innerHTML = localStorage.getItem('liItens');
};
