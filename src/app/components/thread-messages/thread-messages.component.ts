import {Component, Inject, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";
import {ThreadService} from "../../services/thread.service";
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/Message";

@Component({
  selector: 'app-thread-messages',
  templateUrl: './thread-messages.component.html',
  styleUrls: ['./thread-messages.component.scss']
})
export class ThreadMessagesComponent implements OnInit {
  @Input('thread') thread: Thread;
  public messages: Message[];

  /**
   *
   * @param {ThreadService} threadService
   * @param {MessagesService} messagesService
   */
  constructor(private threadService: ThreadService, private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    if (this.thread) {
      this.messagesService.getMessages(this.thread.id).subscribe((messages) => {
        this.messages = messages;
        this.messagesService.messagesLoadStatus.emit(messages);
      });
    }
  }

}
