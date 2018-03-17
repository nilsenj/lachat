import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBlockComponent } from './company-block.component';

describe('CompanyBlockComponent', () => {
  let component: CompanyBlockComponent;
  let fixture: ComponentFixture<CompanyBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
