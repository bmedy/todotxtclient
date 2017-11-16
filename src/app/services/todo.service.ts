import { Injectable } from '@angular/core';
import { Todo } from "../model/todo";


@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  todoAsText: string = `
@call the dry cleaner
+bigProject start it with a smile
Cut the bull shit
Don't worry be happy @takeItEasy
Find a soulmate +Life
Write a love letter to my soulmate +Life

  `

  constructor() { }

  getTodos() {
    for (var todoString of this.todoAsText.split('\n')) {
      if (todoString.trim()) this.todos.push(new Todo(todoString));
    }
    return this.todos;
  }
}

