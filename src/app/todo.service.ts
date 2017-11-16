import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { Logger } from 'angular2-logger/core';


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

  constructor(private logger: Logger) { }

  getTodos() {
    this.logger.debug("retrieve todos...");
    for (var todoString of this.todoAsText.split('\n')) {
      if (todoString.trim()) this.todos.push(new Todo(todoString));
    }
    this.logger.debug("retrieved " + this.todos.length + " todos." );
    return this.todos;
  }
}

