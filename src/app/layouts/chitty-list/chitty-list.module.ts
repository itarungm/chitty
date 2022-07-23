import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChittyListRoutingModule } from './chitty-list-routing.module';
import { ChittyListComponent } from './chitty-list.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ChittyListComponent
  ],
  imports: [
    CommonModule,
    ChittyListRoutingModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ChittyListModule { }
