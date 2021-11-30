// Requisito 5 e 6.
// Referência: projeto criado na monitoria do Thalles.
// Referência do FOCUS ao colega @SrTonn.
const taskList = document.querySelector('#lista-tarefas');
const addButtom = document.querySelector('#criar-tarefa');
addButtom.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const inputValue = input.value;
  const taskName = document.createElement('li');
  taskName.innerText = inputValue;
  input.focus(); // para o cursor voltar sempre para a caixa do input
  taskName.addEventListener('click', addRemove);
  taskName.addEventListener('dblclick', riskItem);
  taskList.appendChild(taskName);
  input.value = '';
});

// Requisito 7 e 8.
function addRemove(event) {
  const taskName = event.target;
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    taskSelected.classList.remove('selected');
  }
  taskName.classList.add('selected');
}

// Requisito 9.
// Referência do TOGGLE na Monitoria do Thalles Carneiro. https://www.w3schools.com/howto/howto_js_toggle_class.asp
function riskItem(event) {
  const taskName = event.target;
  taskName.classList.toggle('completed');
}

// Requisito 10.
const deleteButton = document.querySelector('#apaga-tudo');
deleteButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Requisito 11.
// Referência: Colega @SrTonn pelo entendimento do FOR EACH.
// Referência REMOVE: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const removeBotton = document.querySelector('#remover-finalizados');
removeBotton.addEventListener('click', () => {
  const completedList = document.querySelectorAll('.completed');
  completedList.forEach((elemento) => {
    elemento.remove();
  });
});

// Requisito 12.
// Referência: agradecimento a Colega Tábata pelo auxílio nesse requisito.
// Foi adicionado os eventos de clique para após carregar a página, os itens continuem responsivos nos cliques.
const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', () => {
  const tasks = taskList.innerHTML;
  localStorage.setItem('tarefas', tasks);
});
function saveTasks() {
  taskList.innerHTML = localStorage.getItem('tarefas');
  taskList.addEventListener('click', addRemove);
  taskList.addEventListener('click', riskItem);
}
saveTasks();

// Requisito 13
// Referência do INSERT BEFORE: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
// Referência do Guard Claude: https://pt.stackoverflow.com/questions/455667/o-que-%C3%A9-uma-guard-clause
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');

upButton.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (!taskSelected) return;
  const father = taskSelected.parentNode;
  if (taskSelected !== taskList.children[0]) {
    father.insertBefore(taskSelected, taskSelected.previousElementSibling);
  }
});

downButton.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (!taskSelected) return;
  const father = taskSelected.parentNode;
  if (taskSelected !== taskList.lastChild) {
    father.insertBefore(taskSelected.nextElementSibling, taskSelected);
  }
});

// Requisito 14.
// Referência REMOVE: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const removeSelecButton = document.querySelector('#remover-selecionado');
removeSelecButton.addEventListener('click', () => {
  const itenSelected = document.querySelector('.selected');
  itenSelected.remove();
});
