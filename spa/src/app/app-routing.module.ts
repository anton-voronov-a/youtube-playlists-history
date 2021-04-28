import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { DocsComponent } from "./docs/docs.component";
//import { ClientIdComponent } from "./docs/client-id/client-id.component";
//import { ProjectComponent } from "./docs/client-id/project/project.component";
//import { ApiComponent } from "./docs/client-id/api/api.component";
//import { ConsentScreenComponent } from "./docs/client-id/consent-screen/consent-screen.component";
//import { CredentialsComponent } from "./docs/client-id/credentials/credentials.component";
//import { ExtensionComponent } from "./docs/client-id/extension/extension.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'docs', component: DocsComponent, },
  //{
  //  path: 'docs/client-id', component: ClientIdComponent,
  //  children: [
  //    { path: 'project', component: ProjectComponent, },
  //    { path: 'api', component: ApiComponent, },
  //    { path: 'consent-screen', component: ConsentScreenComponent, },
  //    { path: 'credentials', component: CredentialsComponent, },
  //    { path: 'extension', component: ExtensionComponent, },
  //  ],
  //},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
