import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";
import { MaterialModule } from "./material-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
