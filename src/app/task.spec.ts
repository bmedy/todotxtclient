import { TestBed, async } from '@angular/core/testing';

import { Task} from './task';

let content = "Simple task";
describe('parseTask - ' + content, () => {
  let task = new Task(content);
  it('Content: ', () => expect(task.taskAsString).toBe(content));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task undone', () => expect(task.done).toBe(false));
});

let content2 = "x Simple task done";
describe('parseTask - ' + content2, () => {
  let task = new Task(content2);
  it('Content ', () => expect(task.taskAsString).toBe(content2));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task done', () => expect(task.done).toBe(true));
});

let content3 = "Task with one +project";
describe('parseTask - ' + content3, () => {
  let task = new Task(content3);
  it('Content ', () => expect(task.taskAsString).toBe(content3));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('One project', () => expect(task.projects[0]).toBe("+project"));
  it('task done', () => expect(task.done).toBe(false));
});

let content4 = "Task with 2 +project +other";
describe('parseTask - ' + content4, () => {
  let task = new Task(content4);
  it('Content ', () => expect(task.taskAsString).toBe(content4));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('first project', () => expect(task.projects[0]).toBe("+project"));
  it('second project', () => expect(task.projects[1]).toBe("+other"));
  it('task done', () => expect(task.done).toBe(false));
});

let content5 = "Task with one @context";
describe('parseTask - ' + content5, () => {
  let task = new Task(content5);
  it('Content ', () => expect(task.taskAsString).toBe(content5));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('first context', () => expect(task.contexts[0]).toBe("@context"));
  it('first project', () => expect(task.contexts[0]).toBe("@context"));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task done', () => expect(task.done).toBe(false));
});

let content6 = "Task with 2 @context @other";
describe('parseTask - ' + content6, () => {
  let task = new Task(content6);
  it('Content ', () => expect(task.taskAsString).toBe(content6));
  it('No priority', () => expect(task.priority).toBe(undefined));
  it('first context', () => expect(task.contexts[0]).toBe("@context"));
  it('second context', () => expect(task.contexts[1]).toBe("@other"));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task done', () => expect(task.done).toBe(false));
});

let content7 = "(A) task with priority";
describe('parseTask - ' + content7, () => {
  let task = new Task(content7);
  it('Content ', () => expect(task.taskAsString).toBe(content7));
  it('No priority', () => expect(task.priority).toBe("A"));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task done', () => expect(task.done).toBe(false));
});

let content8 = "(A) task with priority";
describe('parseTask - ' + content8, () => {
  let task = new Task(content8);
  it('Content ', () => expect(task.taskAsString).toBe(content8));
  it('No priority', () => expect(task.priority).toBe("A"));
  it('Context empty', () => expect(task.contexts.length).toBe(0));
  it('Project Empty', () => expect(task.projects.length).toBe(0));
  it('task done', () => expect(task.done).toBe(false));
});
