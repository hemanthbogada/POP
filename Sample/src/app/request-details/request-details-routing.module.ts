import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDetailsPageComponent } from './request-details-page/request-details-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'requestDetailsPage', pathMatch: 'full'},
  {path:'requestDetailsPage',component:RequestDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestDetailsRoutingModule { }
