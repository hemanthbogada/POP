import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectRequestRoutingModule } from './redirect-request-routing.module';
import { RedirectRequestPageComponent } from './redirect-request-page/redirect-request-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedirectPrimengModule } from './redirect-prime-ng.module';
import { RedirectRequestTableComponent } from './redirect-request-page/redirect-request-table/redirect-request-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [RedirectRequestPageComponent,RedirectRequestTableComponent],
  imports: [
    CommonModule,
    RedirectRequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RedirectPrimengModule,
    FlexLayoutModule
  ]
})
export class RedirectRequestModule { }
