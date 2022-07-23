import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChittyListComponent } from './chitty-list.component';

const routes: Routes = [
  {
    path:'',
    component:ChittyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChittyListRoutingModule { }
