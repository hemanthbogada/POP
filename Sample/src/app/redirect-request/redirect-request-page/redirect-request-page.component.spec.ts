import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectRequestPageComponent } from './redirect-request-page.component';

describe('RedirectRequestPageComponent', () => {
  let component: RedirectRequestPageComponent;
  let fixture: ComponentFixture<RedirectRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
