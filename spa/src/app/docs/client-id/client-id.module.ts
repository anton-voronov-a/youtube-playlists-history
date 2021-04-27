import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../../material-module";

import { ClientIdComponent } from './client-id.component';
import { ProjectComponent } from './project/project.component';
import { ApiComponent } from './api/api.component';
import { ConsentScreenComponent } from './consent-screen/consent-screen.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ExtensionComponent } from './extension/extension.component';


@NgModule({
  declarations: [ClientIdComponent, ProjectComponent, ApiComponent, ConsentScreenComponent, CredentialsComponent, ExtensionComponent],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule
  ]
})
export class ClientIdModule { }
