import { Component, Input } from '@angular/core'

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
}
)

export class TodoComponent {
  @Input('todo') todo: Todo;

}
