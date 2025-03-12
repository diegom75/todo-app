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
    toDoListDisplay = document.getElementsById(toDoList);
}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code  
});

// Load todos when page loads
fetchTodos();
