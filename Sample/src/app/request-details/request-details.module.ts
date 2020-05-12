import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDetailsRoutingModule } from './request-details-routing.module';
import { RequestDetailsPageComponent } from './request-details-page/request-details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RequestDetailsTableComponent } from './request-details-page/request-details-table/request-details-table.component';
import { RequestDetailsPrimengModule } from './request-details-prime-ng.module';


@NgModule({
  declarations: [RequestDetailsPageComponent,RequestDetailsTableComponent],
  imports: [
    CommonModule,
    RequestDetailsRoutingModule,
    FlexLayoutModule,
    RequestDetailsPrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequestDetailsModule { }
