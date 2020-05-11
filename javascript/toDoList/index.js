var todos = ["buy new shoes"];

var input = prompt("what would you like to do");

while (input !== "quit") {
  //handle input
  if (input == "list") {
    listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
  }
  //ask again for new input
  input = prompt("what would you like to do");
}
console.log("quit app");

function listToDos() {
  console.log("**********");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addToDo() {
  //ask for new to do
  var newTodo = prompt("enter new todo");
  todos.push(newTodo);
  console.log("added");
}

function deleteToDo() {
  //asl for index of to do to be deleted
  var index = prompt("enter index of todo to delete");
  //delete todo
  //splice()
  todos.splice(index, 1);
  console.log("deleted");
}
