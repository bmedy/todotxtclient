/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

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
  splited.forEach(function (item, index) {
    if (index === 0) {
      task.completed = item === 'x';
      task.creationDate = creationDate(item);
    } else {
      if (index === 1 && task.completed) {
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
}


/*
 * Parse an array of tasks. 
 */
function parseTasks(tasks) {
  tasks.forEach(function (item) {
    console.log(parseTask(item));
  });
}


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


