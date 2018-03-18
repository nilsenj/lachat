import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadMessagesComponent } from './thread-messages.component';

describe('ThreadMessagesComponent', () => {
  let component: ThreadMessagesComponent;
  let fixture: ComponentFixture<ThreadMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
