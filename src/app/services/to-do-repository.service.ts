import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import {IToDo, ToDo} from "../models/to-do";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ToDoRepositoryService {

  constructor(private http: HttpClient) { }

  public getToDoes(): Observable<ToDo[]> {
    let toDoItemsStore: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>(new Array<ToDo>());
    let toDoItemObservable = toDoItemsStore.asObservable();

    this.http.get<IToDo[]>('https://todoapp42.azurewebsites.net/api/todoes').subscribe(result => {
      let toDoItems = result.map((receivedData: IToDo) => {
        return new ToDo(
          receivedData.id,
          receivedData.title,
          receivedData.date,
          receivedData.categoryId,
          new Category(receivedData.category?.id, receivedData.category?.title, receivedData.category?.color),
          receivedData.description
        )
      });
      toDoItemsStore.next(toDoItems);
    }, error => console.error(error));

    return toDoItemObservable;
  }
}
