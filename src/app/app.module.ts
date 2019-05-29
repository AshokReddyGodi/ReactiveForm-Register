import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importing the reactive forms module.
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Declaring the reactive forms module in the imports section of NgModule decorator.
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
