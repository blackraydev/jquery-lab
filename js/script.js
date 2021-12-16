const createCell = (parent, text, className) => {
  $('<td>')
    .text(text)
    .addClass(className)
    .appendTo(parent);
}

const renderData = (data) => {
  data.map(todoData => {
    const todo = $("<tr>").appendTo(".todos_table");

    createCell(todo, todoData.id, "todo_id");
    createCell(todo, todoData.title, "todo_title");
    createCell(todo, todoData.completed, "todo_completed");
  })
}

const loadTodos = async () => await $.ajax({
  url: "https://jsonplaceholder.typicode.com/todos",
  data: {
    _limit: 10
  },
  success: (data) => {
    renderData(data);
    $(".export_todos").click(() => $('.todos_table').tblToExcel())
  },
  error: (e) => {
    $(".export_todos").attr("disabled", true)
    alert(`Error ${e.status}`)
  }
})

$(this).ready(loadTodos);