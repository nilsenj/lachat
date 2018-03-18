import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadMessageInputComponent } from './thread-message-input.component';

describe('ThreadMessageInputComponent', () => {
  let component: ThreadMessageInputComponent;
  let fixture: ComponentFixture<ThreadMessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadMessageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadMessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
