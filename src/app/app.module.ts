import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { ToDoComponent } from './to-do/to-do.component';
import { CreateToDoComponent } from './to-do/create-to-do/create-to-do.component';
import { FormsModule } from "@angular/forms";
import { DeleteToDoComponent } from './to-do/delete-to-do/delete-to-do.component';
import { EditToDoComponent } from './to-do/edit-to-do/edit-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoComponent,
    CreateToDoComponent,
    DeleteToDoComponent,
    EditToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
