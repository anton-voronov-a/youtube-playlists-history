import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MaterialModule } from "./material-module";
import { HomeModule } from "./home/home.module";
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,

    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
