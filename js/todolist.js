const todoDiv = document.body.querySelector("#todo-list");
const todoForm = todoDiv.querySelector("#todo-form");

let todos = [];

function saveTodosToLocalStorage(){
  localStorage.setItem("todos", JSON.stringify(todos));
}

function onDeleteBtnClick(event){
  event.preventDefault();

  const li = event.target.parentElement;
  const id = li.id;

  todos = todos.filter(element => element.id !== parseInt(id));
  saveTodosToLocalStorage();

  paintTodoUl();
}

function paintTodoUl(){

  //Remove Current UL
  const todoUl = todoDiv.querySelector("#todo-ul");
  if(todoUl !== null){
    todoUl.remove();
  }

  //Make New UL
  const newTodoUl = document.createElement("ul");
  newTodoUl.id="todo-ul";
  todos.forEach(element => {
    const li = document.createElement("li");
    li.id=element.id;

    const content = document.createElement("span");
    content.innerText = element.content;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText="X";
    deleteBtn.addEventListener("click", onDeleteBtnClick);

    li.appendChild(content);
    li.appendChild(deleteBtn);

    newTodoUl.appendChild(li);
  });

  todoDiv.appendChild(newTodoUl);
}

function onToDoInputSubmit(event){
  event.preventDefault();

  const todoFormInput = todoForm.querySelector("input");
  const todoInput = todoFormInput.value;

  const  newTodoObj = {
    content: todoInput,
    id: Date.now(),
  };

  todos.push(newTodoObj);

  saveTodosToLocalStorage();

  paintTodoUl();

  // clear input
  todoFormInput.value="";
}

todoForm.addEventListener("submit", onToDoInputSubmit);


const savedTodosString = localStorage.getItem("todos");
if(savedTodosString !== null){
  todos=JSON.parse(savedTodosString);
  paintTodoUl();
}
