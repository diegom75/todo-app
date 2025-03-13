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
    todos.forEach(todo => {
        // creates a new list item, so that it gets added to the todoList, then sets the text content to the todo title
        const li= document.createElement("li");
        li.textContent = todo.title
        // create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";

        //function to delete todos
        deleteButton.onclick = () => {
          deleteTodo(todo.id); // the id is there so that the todos can be deleted correctly
        };
        li.appendChild(deleteButton); // appends the delete button to the llist item.
        todoList.appendChild(li);// appends the last item to the todo list 
  });
}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code  
});

// Load todos when page loads
fetchTodos();
