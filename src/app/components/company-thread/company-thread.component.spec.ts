import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyThreadComponent } from './company-thread.component';

describe('CompanyThreadComponent', () => {
  let component: CompanyThreadComponent;
  let fixture: ComponentFixture<CompanyThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
