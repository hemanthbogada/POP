import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { redirectRequestHeading, redirectRequestSubHeading } from 'src/app/app-constants';

@Component({
  selector: 'app-redirect-request-page',
  templateUrl: './redirect-request-page.component.html',
  styleUrls: ['./redirect-request-page.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RedirectRequestPageComponent implements OnInit {
  mainHeaderLabel:String;
  subHeaderLabel:String;
  cities = [];
  constructor() { }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    this.mainHeaderLabel= redirectRequestHeading;
    this.subHeaderLabel = redirectRequestSubHeading
  }

}
