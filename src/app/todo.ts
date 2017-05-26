/*
 * Todo class
 */

import * as _ from 'lodash';

export class Todo {
  done: boolean = false;
  priority: string;
  contexts: string[] = [];
  projects: string[] = [];

  constructor(public todoAsString: string) {
    this.done = _.startsWith(todoAsString, "x ");
    let sp = todoAsString.split(" ");

    for (var entry of sp){
      if (_.startsWith(entry, "@")) {
        this.contexts.push(entry);
      }

      if (_.startsWith(entry, "+")) {
        this.projects.push(entry);
      }
    }
    if (this.done){
      this.extractPriority(sp[1]);
    } else {
      this.extractPriority(sp[0]);
    }

  }

  extractPriority(s :string) {
    if (s.length === 3 && s.startsWith("(") && s.endsWith(")"))
      this.priority = s[1];

  }
}



