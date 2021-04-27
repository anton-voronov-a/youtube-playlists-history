import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { DocsComponent } from './docs.component';
import { ClientIdModule } from "./client-id/client-id.module";



@NgModule({
  declarations: [DocsComponent],

  imports: [
    CommonModule,
    RouterModule,

    ClientIdModule
  ]
})
export class DocsModule { }
