import { Component, Input, Output, EventEmitter} from '@angular/core'

import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
}
  )

export class TodoComponent {
  @Input('todo') todo: Todo;
  @Output() todoDeleted = new EventEmitter<Todo>();

  constructor() { }

  todoDone() {
    this.todo.todoDone();
  }

  todoDelete() {
    this.todoDeleted.emit(this.todo);
  }

}
