import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditChitComponent } from './components/add-edit-chit/add-edit-chit.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AddEditChitComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports:[
    AddEditChitComponent,
    FooterComponent
  ]
})
export class SharedModule { }
