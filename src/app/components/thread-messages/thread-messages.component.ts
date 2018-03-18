import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";

@Component({
  selector: 'app-thread-messages',
  templateUrl: './thread-messages.component.html',
  styleUrls: ['./thread-messages.component.scss']
})
export class ThreadMessagesComponent implements OnInit {
  @Input('thread') thread: Thread;

  constructor() { }

  ngOnInit() {
  }

}
