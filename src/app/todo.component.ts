import { Component, Input, Output, EventEmitter} from '@angular/core'

import { Logger } from 'angular2-logger/core'

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
}
  )

export class TodoComponent {
  @Input('todo') todo: Todo;
  @Output() todoDeleted = new EventEmitter<Todo>();

  constructor(private logger: Logger) { }

  todoDone() {
    this.todo.todoDone();
  }

  todoDelete() {
    this.todoDeleted.emit(this.todo);
  }

}
