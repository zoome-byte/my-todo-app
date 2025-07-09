function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = () => {
    li.classList.toggle("done");
  };

  const taskList = document.getElementById("taskList");
  taskList.appendChild(li);
  input.value = "";
}
