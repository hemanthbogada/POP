import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule
  ]
})
export class RedirectPrimengModule { }
