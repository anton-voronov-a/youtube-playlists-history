import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PrivacyPolicyComponent } from "./privacy-policy.component";


@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrivacyPolicyModule { }
