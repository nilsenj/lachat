import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisComponent } from './emojis.component';

describe('EmojisComponent', () => {
  let component: EmojisComponent;
  let fixture: ComponentFixture<EmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
