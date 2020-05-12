import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectRequestTableComponent } from './redirect-request-table.component';

describe('RedirectRequestTableComponent', () => {
  let component: RedirectRequestTableComponent;
  let fixture: ComponentFixture<RedirectRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
