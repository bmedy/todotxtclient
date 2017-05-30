import { Component } from '@angular/core';
//import { TodoListComponent} from './todo-list.component';
import { TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todotxtclient works!';
}
