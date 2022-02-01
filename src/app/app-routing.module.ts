import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [{path:'', component:ViewbookComponent}, {path:'addbook', component:AddBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
