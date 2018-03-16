import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(threadService: ThreadService) {
    threadService.activeThreadStatus.subscribe((id) => {
      console.log('thread changed to #:' + id);
    });
  }

  ngOnInit() {
  }

}
