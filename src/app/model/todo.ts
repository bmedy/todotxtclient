/*
 * Todo class
 */

import * as _ from 'lodash';

export class Todo {
  done: boolean = false;
  text: string[] = [];
  priority: string;
  contexts: string[] = [];
  projects: string[] = [];

  constructor( public todoAsString: string ) {

    let sp = todoAsString.split(" ");

    if (sp[0] === "x"){
      this.done = true;
      // the task is done, we remove the element so it won't be parsed again
      sp.splice(0,1);
    }
    if (sp[0].length === 3 && sp[0].startsWith("(") && sp[0].endsWith(")")){
      this.priority = sp[0][1];
      // priority is set we remove the element so it won't be parsed again
      sp.splice(0,1);
    }

    for (var entry of sp){
      if (_.startsWith(entry, "@")) {
        this.contexts.push(entry);
      }
      else if (_.startsWith(entry, "+")) {
        this.projects.push(entry);
      }
      else this.text.push(entry)
    }
  }

  /* Mark todo as done. */
  todoDone(){
    this.done = ! this.done;
    this.buildStringFromProperties();
  }

  //this method rebuild the string as todotxt string from the properties.
  //It should be called everytime a property as changed.
  buildStringFromProperties(){
    let todoChunks: string[] = [];

    if (this.done) todoChunks.push("x ");
    if (this.priority) todoChunks.push("(" + this.priority + ")");
    todoChunks.push (this.text.join(" "));
    todoChunks.push (this.contexts.join(" "));
    todoChunks.push (this.projects.join(" "));

    this.todoAsString = todoChunks.join(" ");
  }
}



