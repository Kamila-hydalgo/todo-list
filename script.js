// Requisito 5 e 6.
// Referência: projeto criado na monitoria do Thalles.
const addButtom = document.querySelector('#criar-tarefa');
addButtom.addEventListener('click', function () {
  const input = document.querySelector('#texto-tarefa');
  const inputValue = input.value;
  const taskList = document.querySelector('#lista-tarefas');
  const taskName = document.createElement('li');
  taskName.innerText = inputValue;
  taskName.addEventListener('click', addRemove)
  taskList.appendChild(taskName);
  input.value = '';
});

// Requisito 7.
function addRemove(event) {
  const taskName = event.target;
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    taskSelected.classList.remove('selected');
  }
  taskName.classList.add('selected');
}
