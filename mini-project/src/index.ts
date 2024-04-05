interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist");
// ! (non null 단언 연산자) : typescript에게 이 코드가 절대 null이 아니라고 약속하는 연산자

const todos: Todo[] = readTodo();
todos.forEach(createTodo);
// 이 방식으로 forEach를 사용하면 해당 콜백함수에 자동으로 인수가 들어가는 것으로 보임 후에 더 자세히 알아볼것

function readTodo(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);

  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLi.append(todo.text);
  newLi.append(checkbox);
  list?.append(newLi);
}
form.addEventListener("submit", handleSubmit);
/* 
콜백함수를 바로 작성하지 않고 분리된 다른 함수에서 옮겨온다면 타입스크립트가 그 문맥을 파악하지 못하여 파라미터의 형식을 추론하지 못한다.
form.addEventListener("submit", (e) => {
  e.preventDefault();
}); 
*/

/* btn.addEventListener("click", () => {
  console.log(input.value);
  input.value = "";
}); */
// ? 연산자의 의미 : 만약 btn이 있다면 뒤에 있는 코드를 진행하라 (javascript 연산자)
// btn이 null일 경우 addEventListener가 실행되지 않음

// ------------
// type Assertions (타입 단언) : as 를 사용하여 이 식별자가 어떠한 타입이라고 지정하여 typescript에게 알려주는 것
const mystery: unknown = "Hello world!";

const numChars = (mystery as string).length;
