import { Component, OnInit } from '@angular/core';
import { IToDo, ToDo } from "../../models/to-do";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  currentToDo:ToDo = new ToDo(0,"",new Date(Date.now()), null, null, "" );

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  save()
  {
    this.http.post<IToDo>('https://todoapp42.azurewebsites.net/api/todoes', this.currentToDo).subscribe(result => {
      this.router.navigate( ["/"] );
    }, error => console.error(error));
  }
}
