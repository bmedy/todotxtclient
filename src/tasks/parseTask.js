/* test code should be removed */ 
var tasks = [
  'Very simple task',
  '1969-09-14 task with création date',
  'x Completed task',
  'x 1969-09-14 completed task with creation date'
];
console.log(tasks);
parseTasks(tasks);
/* end of test code */

/*
 * Parse an array of tasks. 
 */
function parseTasks(tasks) {
  tasks.forEach(function (item) {
    console.log(parseTask(item));
  });
};

/*
 * Parse one task as a string and return an object. 
 */

function parseTask(taskAsText) {
  console.log('parsing task ' + taskAsText);
  /* there should be a simplier way to split a string */
  var splited = taskAsText.match(/\S+/g);
  var task = {
    original: taskAsText,
    splited: splited,
    content: ''
  };
  splited.forEach(function (item, index, array) {
    if (index == 0) {
      task.completed = item === 'x';
      task.creationDate = creationDate(item);
    } else {
      if (index == 1 && task.completed) {
        task.creationDate = creationDate(item);
      } else { 
        if (task.content) {
          task.content = task.content + ' ';
        }
        task.content = task.content + item;
      }
    }
  });
  return task;
};

/*
 * receive a string. 
 * If it's a correcty formated date it return the item.
 * if not, returns undifined. 
 */
function creationDate(item) {
  if (item.length === 10) {
    if (item.match(/\d{4}-\d{2}-\d{2}/).length) {
      return item;
    }
  }
}
