import { TestBed, async } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('getTodos', () => {
  let todos = new TodoService().getTodos();
  console.log(todos);
});
