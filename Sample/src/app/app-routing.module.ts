import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'requestRedirect', pathMatch: 'full'},
  {path:'requestRedirect',
  loadChildren: () => import('./redirect-request/redirect-request.module').then(m => m.RedirectRequestModule)},
  {path:'requestDetails',
  loadChildren: () => import('./request-details/request-details.module').then(m => m.RequestDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
