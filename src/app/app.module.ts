import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MdGridListModule} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';


const ROUTES = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'addassignment',
    component: AddassignmentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddassignmentComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdGridListModule,
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
