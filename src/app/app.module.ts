import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,MatGridListModule,MatInputModule,MatIconModule} from '@angular/material/';

import { AppComponent } from './app.component';
import { bookComponent } from './_models/book.component';
import { DataTableComponent } from './data-table/data-table.component'

@NgModule({
declarations: [
    AppComponent,
    bookComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }