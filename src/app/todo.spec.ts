import { TestBed, async } from '@angular/core/testing';

import { Todo} from './todo';

let content = "Simple todo";
describe('parseTodo - ' + content, () => {
  let todo = new Todo(content);
  it('Content: ', () => expect(todo.todoAsString).toBe(content));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo undone', () => expect(todo.done).toBe(false));
});

let content2 = "x Simple todo done";
describe('parseTodo - ' + content2, () => {
  let todo = new Todo(content2);
  it('Content ', () => expect(todo.todoAsString).toBe(content2));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo done', () => expect(todo.done).toBe(true));
});

let content3 = "Todo with one +project";
describe('parseTodo - ' + content3, () => {
  let todo = new Todo(content3);
  it('Content ', () => expect(todo.todoAsString).toBe(content3));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('One project', () => expect(todo.projects[0]).toBe("+project"));
  it('todo done', () => expect(todo.done).toBe(false));
});

let content4 = "Todo with 2 +project +other";
describe('parseTodo - ' + content4, () => {
  let todo = new Todo(content4);
  it('Content ', () => expect(todo.todoAsString).toBe(content4));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('first project', () => expect(todo.projects[0]).toBe("+project"));
  it('second project', () => expect(todo.projects[1]).toBe("+other"));
  it('todo done', () => expect(todo.done).toBe(false));
});

let content5 = "Todo with one @context";
describe('parseTodo - ' + content5, () => {
  let todo = new Todo(content5);
  it('Content ', () => expect(todo.todoAsString).toBe(content5));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('first context', () => expect(todo.contexts[0]).toBe("@context"));
  it('first project', () => expect(todo.contexts[0]).toBe("@context"));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo done', () => expect(todo.done).toBe(false));
});

let content6 = "Todo with 2 @context @other";
describe('parseTodo - ' + content6, () => {
  let todo = new Todo(content6);
  it('Content ', () => expect(todo.todoAsString).toBe(content6));
  it('No priority', () => expect(todo.priority).toBe(undefined));
  it('first context', () => expect(todo.contexts[0]).toBe("@context"));
  it('second context', () => expect(todo.contexts[1]).toBe("@other"));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo done', () => expect(todo.done).toBe(false));
});

let content7 = "(A) todo with priority";
describe('parseTodo - ' + content7, () => {
  let todo = new Todo(content7);
  it('Content ', () => expect(todo.todoAsString).toBe(content7));
  it('No priority', () => expect(todo.priority).toBe("A"));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo done', () => expect(todo.done).toBe(false));
});

let content8 = "(A) todo with priority";
describe('parseTodo - ' + content8, () => {
  let todo = new Todo(content8);
  it('Content ', () => expect(todo.todoAsString).toBe(content8));
  it('No priority', () => expect(todo.priority).toBe("A"));
  it('Context empty', () => expect(todo.contexts.length).toBe(0));
  it('Project Empty', () => expect(todo.projects.length).toBe(0));
  it('todo done', () => expect(todo.done).toBe(false));
});
