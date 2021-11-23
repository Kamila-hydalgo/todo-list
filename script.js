// Requisito 5.
// Referência: projeto criado na monitoria do Thalles.
const addButtom = document.getElementById('criar-tarefa');
addButtom.addEventListener('click', function () {
  const input = document.querySelector('#texto-tarefa');
  const inputValue = input.value;

  const taskList = document.querySelector('#lista-tarefas');
  const taskName = document.createElement('li');
  taskName.innerText = inputValue;
  taskList.appendChild(taskName);
  input.value = '';
});