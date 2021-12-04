import { Component, OnInit } from '@angular/core';
import { ToDo } from "../models/to-do";
import { ToDoRepositoryService } from "../services/to-do-repository.service";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  public ToDoItems: ToDo[] | null = null;

  constructor(private repository:ToDoRepositoryService) { }

  ngOnInit(): void {
    this.repository.getToDoes().subscribe(result => this.ToDoItems = result);
  }

}
