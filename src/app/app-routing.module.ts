import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CreateToDoComponent } from "./to-do/create-to-do/create-to-do.component";
import { DeleteToDoComponent } from "./to-do/delete-to-do/delete-to-do.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ToDo/Create', component: CreateToDoComponent},
  { path: 'ToDo/Delete/:Id', component: DeleteToDoComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
