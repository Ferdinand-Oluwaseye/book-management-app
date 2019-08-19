import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent} from './view-book/view-book.component';
import { EditBookComponent} from './edit-book/edit-book.component'

const routes: Routes = [
  {
    path: 'book/add',
    component: AddBookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'book',
    component: ViewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
