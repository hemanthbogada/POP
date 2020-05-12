import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-details-table',
  templateUrl: './request-details-table.component.html',
  styleUrls: ['./request-details-table.component.scss']
})
export class RequestDetailsTableComponent implements OnInit {
  cols: any[];
  cars:any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'policyId', header: 'Policy ID' },
      {field: 'path', header: 'Path' },
      { field: 'redirectUrl', header: 'Redirect URL' },
      { field: 'action', header: 'Action' }
  ];
    this.cars = [
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },
      { "policyId": "VW", "path": 2012, "redirectUrl": "Orange", "action": "dsad231ff" },

    ]
  }

}
