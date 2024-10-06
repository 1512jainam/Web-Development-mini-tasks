// THIS IS FOR PRACTICAL 2 D not 4D

const data = [];
const showData = () => {
  const taskElement = document.querySelector("#unoreder_list");
  taskElement.innerHTML = "";
  data.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = d.text;
    if (d.isCompleted) {
      li.classList.add("comp");
    }
    li.onclick = () => toggleTodolist(d.id);
    taskElement.appendChild(li);
  });
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const taskElement = document.querySelector("#unoreder_list");
  const input = document.querySelector("#input");
  const val = input.value;
  if (val) {
    const newTodo = {
      id: data.length + 1,
      isCompleted: false,
      text: val,
    };
    data.push(newTodo);
    console.log(data);
  }
  const li = document.createElement("li");
  li.textContent = val;
  taskElement.appendChild(li);
  showData();
});

const toggleTodolist = (todoId) => {
  const taskId = data.find((d) => d.id === todoId);
  if (taskId !== -1) {
    data.map((val) => {
      if (val.id === todoId) val.isCompleted = !val.isCompleted;
    });
    console.log(data);
    showData();
  }
};
showData();