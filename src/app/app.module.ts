import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoListComponent} from './todo-list.component';

import { AppComponent } from './app.component';
import { Logger } from 'angular2-logger/core';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
