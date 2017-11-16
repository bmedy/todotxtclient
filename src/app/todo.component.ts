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

  constructor(private logger: Logger) { }

  todoDone() {
    console.log("todo done in component...")
    this.logger.debug("Mark todo as done: " + this.todo);
    this.todo.todoDone();
  }


}
