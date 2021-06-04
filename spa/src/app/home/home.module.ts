import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material-module";
import { HomeComponent } from "./home.component";
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    //RouterModule,

    MaterialModule
  ]
})
export class HomeModule { }
