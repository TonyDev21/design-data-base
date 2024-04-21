let todos = JSON.parse(localStorage.getItem("todo-list")) || {};

// Restore checkbox states from localStorage
Object.keys(todos).forEach(key => {
  const todo = todos[key];
  const checkbox = document.getElementById(key);
  if (checkbox) {
    checkbox.checked = todo.status === "completed";
    if (todo.status === "completed") {
      checkbox.parentElement.lastElementChild.classList.add("checked");
    }
  }
});

function updateStatus(selectedTask) {
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add("checked");
    todos[selectedTask.id] = { status: "completed" };
  } else {
    taskName.classList.remove("checked");
    todos[selectedTask.id] = { status: "pending" };
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}