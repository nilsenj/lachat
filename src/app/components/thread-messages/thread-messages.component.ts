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
  public currentUser: any;

  /**
   *
   * @param {ThreadService} threadService
   * @param {MessagesService} messagesService
   */
  constructor(private threadService: ThreadService, private messagesService: MessagesService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    if (this.thread) {
      this.messagesService.getMessages(this.thread.id).subscribe((messages) => {
        this.messages = messages;
        this.messagesService.messagesLoadStatus.emit(messages);
      });
    }
    this.threadService.activeThreadStatus.subscribe((thread) => {
      this.thread = thread;
      this.messagesService.getMessages(thread.id).subscribe((messages) => {
        this.messages = messages;
        this.messagesService.messagesLoadStatus.emit(messages);
      });
    });
  }

}
