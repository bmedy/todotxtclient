import { Component, OnInit, Inject } from '@angular/core';

import { TodoService } from './todo.service';
import { Todo } from './todo';
import { TodoComponent } from './todo.component'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})


export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { };

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo) {
    let todoIndexToDelete = this.todos.indexOf(todo);
    this.todos.splice(todoIndexToDelete,1);
  }
}
