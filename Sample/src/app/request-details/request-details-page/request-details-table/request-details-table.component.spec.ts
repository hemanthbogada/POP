import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsTableComponent } from './request-details-table.component';

describe('RequestDetailsTableComponent', () => {
  let component: RequestDetailsTableComponent;
  let fixture: ComponentFixture<RequestDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
