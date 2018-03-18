import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInnerComponent } from './chat-inner.component';

describe('ChatInnerComponent', () => {
  let component: ChatInnerComponent;
  let fixture: ComponentFixture<ChatInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
