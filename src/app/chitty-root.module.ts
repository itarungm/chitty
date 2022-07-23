import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChittyRootRoutingModule } from './chitty-root-routing.module';
import { ChittyRootComponent } from './chitty-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ChittyRootComponent
  ],
  imports: [
    BrowserModule,
    ChittyRootRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ChittyRootComponent]
})
export class ChittyRootModule { }
