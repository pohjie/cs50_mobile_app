const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function updateCounts() {
  itemCountSpan.textContent = list.getElementsByTagName("li").length
  uncheckedCountSpan.textContent = list.getElementsByTagName("li").length
}

/*
  When newTodo is clicked, we need to:
  1) Fetch the task string from the button
  2) Add the string to list
  3) Increment itemCountSpan and uncheckedCountSpan
  4) Update itemCountSpan and uncheckedCountSpan in the window
  5) Show the list of TODOs in the window
*/
function newTodo() {
  var todo = prompt('Enter your task')
  var li = document.createElement("li");
  var text = document.createTextNode(todo)
  text.className = classNames.TODO_TEXT
  li.appendChild(text)

  // EXTRA: add a delete button
  var button = document.createElement('button');
  button.className = classNames.TODO_DELETE;
  button.innerText = 'Delete';
  button.onclick = function() { // remove list item here
    this.parentElement.remove()
    updateCounts()
  };
  li.appendChild(button)

  list.appendChild(li);

  updateCounts()
}
