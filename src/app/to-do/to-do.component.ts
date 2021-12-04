import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IToDo, ToDo } from "../models/to-do";
import { Category } from "../models/category";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  public ToDoItems: ToDo[] | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IToDo[]>('https://todoapp42.azurewebsites.net/api/todoes') .subscribe(result => {
      this.ToDoItems = result.map(( receivedData:IToDo) =>{
        return new ToDo(
          receivedData.id,
          receivedData.title,
          receivedData.date,
          receivedData.categoryId,
          new Category(
            receivedData.category?.id,
            receivedData.category?.title,
            receivedData.category?.color ),
          receivedData.description
        )
      } );
    }, error => console.error(error));

  }

}
