import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from 'angular2-logger/core';

import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    Logger,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
