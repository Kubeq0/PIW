'use strict';

const input = document.getElementById('new-task');
const addButton = document.getElementById('add-task');
const listSelector = document.getElementById('list-selector');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const confirmDelete = document.getElementById('confirm-delete');
const cancelDelete = document.getElementById('cancel-delete');
const searchBox = document.getElementById('search-box');
const caseInsensitive = document.getElementById('case-insensitive');

let taskToDelete = null;
let lastDeleted = {
  element: null,
  listId: null
};

const createTaskElement = (text) => {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.textContent = text;

  const date = document.createElement('small');
  const left = document.createElement('div');
  left.appendChild(span);
  left.appendChild(date);

  li.appendChild(left);

  li.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') return;

    li.classList.toggle('done');
    span.classList.toggle('done');
    date.textContent = li.classList.contains('done') ? `  ✅${new Date().toLocaleString()}` : '';
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'btn btn-danger btn-sm ms-2';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskToDelete = li;
    modalMessage.textContent = `Czy na pewno chcesz usunąć zadanie o treści: "${text}"?`;
    modal.classList.remove('d-none');
    modal.classList.add('show');
  });

  li.appendChild(deleteBtn);
  return li;
};

addButton.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  const listId = listSelector.value;
  const list = document.querySelector(`.task-list[data-id="${listId}"] .todo-list`);
  const task = createTaskElement(text);
  list.appendChild(task);
  input.value = '';
});

confirmDelete.addEventListener('click', () => {
  if (taskToDelete) {
    const parentList = taskToDelete.closest('.task-list')?.getAttribute('data-id');
    lastDeleted = {
      element: taskToDelete,
      listId: parentList
    };
    taskToDelete.remove();
    taskToDelete = null;
    modal.classList.add('d-none');
    modal.classList.remove('show');
  }
});

cancelDelete.addEventListener('click', () => {
  taskToDelete = null;
  modal.classList.add('d-none');
  modal.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'z' && lastDeleted.element) {
    const list = document.querySelector(`.task-list[data-id="${lastDeleted.listId}"] .todo-list`);
    list.appendChild(lastDeleted.element);
    lastDeleted = { element: null, listId: null };
  }
});

document.querySelectorAll('.list-header').forEach((header) => {
  header.addEventListener('click', () => {
    const parent = header.closest('.task-list');
    parent.classList.toggle('collapsed');
  });
});

searchBox.addEventListener('input', () => {
    const query = searchBox.value.trim();
    const insensitive = caseInsensitive.checked;
    const regex = new RegExp(query, insensitive ? 'i' : '');
  
    console.log('Szukam:', query, 'Insensitive:', insensitive);
  
    document.querySelectorAll('.todo-list li').forEach((li) => {
      const taskText = li.querySelector('span')?.textContent || '';
      console.log('Zadanie:', taskText);
      const match = regex.test(taskText);
      console.log(match);
      li.classList.toggle('d-none', !match);
    });
  });
