var dateRegex = /\d{4}-\d{2}-\d{2}/;

/*
 * receive a string. 
 * If it's a correcty formated date it return the item.
 * if not, returns undifined. 
 */
function creationDate(item) {
  if (item.length === 10) {
    if (item.match(dateRegex).length) {
      return item;
    }
  }
}

/*
 * Parse one task as a string and return an object. 
 *
 */
function parseTask(taskAsText) {
  // FIXME too much code in this function, to be splited up once automatic test is in place.
  console.log('parsing task ' + taskAsText);
  /* there should be a simplier way to split a string */
  //var splited = taskAsText.match(/\S+/g);
  var splited = taskAsText.split(' ');
  var task = {
    original: taskAsText,
    splited: splited,
    content: '',
    contexts: [ ],
    projects: [ ]
  };
  splited.forEach(function (item, index) {
    if (index === 0) {
      task.completed = item === 'x';
      task.creationDate = creationDate(item);
    } else {
      if (index === 1 && task.completed) {
        task.creationDate = creationDate(item);
      } else {
        var projectOrContextChar = item[0];
        var keyValue = item.split(':');
        if (keyValue.length === 2) {
          // key value custom field
          task[keyValue[0]] = keyValue[1];
        } else {
          switch (projectOrContextChar) {
            case '@':
              task.contexts.push(item);
              break;
            case '+':
              task.projects.push(item);
              break;
            default:
              if (task.content) {
                task.content = task.content + ' ';
              }
              task.content = task.content + item;
          }
        }
      }
    }
  });
  return task;
}

/*
 * Parse an array of tasks. 
 */
function parseTasks(tasks) {
  tasks.forEach(function (item) {
    console.log(parseTask(item));
  });
}

/******************************************************
 * FIXME test code should be moved 
 ******************************************************/
var tasks = [
  'Very simple task',
  '1969-09-14 task with création date',
  'x Completed task',
  'x 1969-09-14 completed task with creation date',
  'Task with a project +myproj',
  'Task with 2 projects +myproj +myproj2',
  'Task with 2 projects and 2 contexts +myproj +myproj2 @con @text',
  'Task with a due date due:2000-01-01',
  'Task with custom field custom:field'
];
console.log(tasks);
parseTasks(tasks);
/* end of test code */

