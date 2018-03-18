import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";

@Component({
  selector: 'app-thread-message-input',
  templateUrl: './thread-message-input.component.html',
  styleUrls: ['./thread-message-input.component.scss']
})
export class ThreadMessageInputComponent implements OnInit {
  @Input('thread') thread: Thread;

  constructor() {
  }

  ngOnInit() {
  }

}
