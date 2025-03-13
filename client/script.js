// Get DOM HTML Elements

// Fetch all todos when page loads
async function fetchTodos() {
  const url = "/api/todos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

// Display todos in the list
function displayTodos(todos) {
  todoList.innerHTML = ""; // clear existing todos
  todos.forEach((todo) => {
    // creates a new list item, so that it gets added to the todoList, then sets the text content to the todo title
    const li = document.createElement("li");
    li.textContent = todo.title;
    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    //function to delete todos
    deleteButton.onclick = () => {
      deleteTodo(todo.id); // the id is there so that the todos can be deleted correctly
    };
    li.appendChild(deleteButton); // appends the delete button to the llist item.
    todoList.appendChild(li); // appends the last item to the todo list
  });
}

// function to delete todos
function deleteTodo(id) {
  console.log(`Todo with ID ${id} is to be deleted`);
}

// Handle form submission
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    console.log("New Todo:", newTodo);
    todoInput.value = "";
    const li = document.createElement("li");
    li.textContent = newTodo;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    //add click event listener to the button
    deleteButton.onclick = () => {
      //console.log the delete action
      console.log("Deleting: ", newTodo);
      li.remove(); // to remove the todo from the DOM
    };
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  } else {
    alert("PLEASE ENTER TODO !!");
  }
});

// Load todos when page loads
fetchTodos();
