import { Todo } from "./todo";

export class TodoService {
  private todos: Todo[] = [];
  todoAsText: string = `
todo 1
todo 2
todo 3
  `

  getTodos() {
    for (var todoString of this.todoAsText.split('\r')) {
      this.todos.push (new Todo(todoString));
    }
    return this.todos;
  }

}
