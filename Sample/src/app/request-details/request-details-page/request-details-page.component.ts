import { Component, OnInit } from '@angular/core';
import { detailsHeaderLabel } from 'src/app/app-constants';

@Component({
  selector: 'app-request-details-page',
  templateUrl: './request-details-page.component.html',
  styleUrls: ['./request-details-page.component.scss']
})
export class RequestDetailsPageComponent implements OnInit {
  detailsHeaderLabel :string;
  constructor() { }

  ngOnInit() {
    this.detailsHeaderLabel = detailsHeaderLabel;
  }

}
