// Requisito 5 e 6.
// Referência: projeto criado na monitoria do Thalles.
const taskList = document.querySelector('#lista-tarefas');
console.log(taskList);
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
// Referência: Colega @SrTonn pelo uso do FOR EACH.
const removeBotton = document.querySelector('#remover-finalizados');
removeBotton.addEventListener('click', () => {
  const completedList = document.querySelectorAll('.completed');
  completedList.forEach((elemento) => {
    elemento.remove();
  });
});
// Requisito 14.
const removeSelecButton = document.querySelector('#remover-selecionado');
console.log(removeSelecButton);
removeSelecButton.addEventListener('click', () => {
  const itenSelected = document.querySelector('.selected');
  itenSelected.remove();
});
