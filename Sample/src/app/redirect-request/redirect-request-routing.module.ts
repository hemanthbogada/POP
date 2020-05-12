import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectRequestPageComponent } from './redirect-request-page/redirect-request-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'requestRedirectPage', pathMatch: 'full'},
  {path:'requestRedirectPage',component:RedirectRequestPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectRequestRoutingModule { }
