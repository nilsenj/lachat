import {
  AfterContentInit,
  AfterViewInit,
  Component, ContentChild, ElementRef, Inject, Input, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {Thread} from "../../models/Thread";
import {ThreadService} from "../../services/thread.service";
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/Message";
import {AuthenticationService} from "../../services/authentication.service";
import kebab from "just-kebab-case";
import EmbedJS from 'embed-js';
import url from 'embed-plugin-url';

// import emoji from '../emojis/emojis.plugin';
import emoji from 'embed-plugin-emoji';
import media from 'embed-plugin-media';
import twitter from 'embed-plugin-twitter';
import instagram from 'embed-plugin-instagram';
import github from 'embed-plugin-github';
import facebook from 'embed-plugin-facebook';
import youtube from 'embed-plugin-youtube';
import map from 'embed-plugin-map';
import noEmbed from "embed-plugin-noembed"
import highlight from "embed-plugin-highlight"

@Component({
  selector: 'app-thread-messages',
  templateUrl: './thread-messages.component.html',
  styleUrls: ['./thread-messages.component.scss']
})
export class ThreadMessagesComponent implements OnInit, AfterContentInit {
  @Input('thread') thread: Thread;
  public messages: Message[];
  public currentUser: any = {};
  public msgLoadCounter: number = 0;

  /**
   *
   * @param {ThreadService} threadService
   * @param {MessagesService} messagesService
   * @param {AuthenticationService} authenticationService
   */
  constructor(private threadService: ThreadService,
              private messagesService: MessagesService,
              private authenticationService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.messagesService.activeMessageStatus.subscribe((message) => {
      if (message) {
        this.embedBody(message);
        this.messages.unshift(message);
      }
    });
  }

  ngOnInit(): void {
    if (this.thread) {
      this.messagesService.getMessages(this.thread.id).subscribe((messages) => {
        messages.forEach((msg) => {
          this.embedBody(msg);
        });
        this.messages = messages;
        this.messagesService.messagesLoadStatus.emit(messages);
      });
    }
    this.threadService.activeThreadStatus.subscribe((thread) => {
      if (thread) {
        this.thread = thread;
        this.messagesService.getMessages(thread.id).subscribe((messages) => {
          messages.forEach((msg) => {
            this.embedBody(msg);
          });
          this.messages = messages;
          this.messagesService.messagesLoadStatus.emit(messages);
        });
      }
    });
    this.messagesService.messagesLoadStatus.subscribe(() => {
      $(window).ready(() => {
        this.jumpToBottom($("#messages-elem"));
      });
    });
    this.messagesService.activeMessageStatus.subscribe(() => {
      $(window).ready(() => {
        this.jumpToBottom($("#messages-elem"));
      });
    });
  }

  ngAfterContentInit() {

  }

  embedBody(msg: Message) {
    $(document).ready(() => {
      let x = new EmbedJS({
        // input: msg.body,
        input: document.getElementById('msg-' + msg.id),
        highlightCode: true,
        plugins: [
          map(),
          url(),
          emoji({
            template(emojiName) {
              return `<span class="gl gl-${kebab(emojiName)}"></span>`
            }
          }),
          github(),
          noEmbed(),
          highlight(),
          media(),
          twitter(),
          instagram(),
          facebook({height: 320}),
          youtube({
            gAuthKey: 'AIzaSyA9cKEIcRyFkNYmHW468LbhTFAFVqMihUQ', // will be automatically passed to all plugins requiring it.
            height: 400
          })
        ]
      });
      x.render().then(() => {
        $(window).ready(() => {
          this.jumpToBottom($("#messages-elem"));
        });
      });
      x.text().then(({result}) => {
        msg.body = result;
      });
    });
  }

  jumpToBottom(elementOrSelector) {
    $(document).ready(function () {
      $(document).scrollTop(
        //This will find the top position of element
        $(elementOrSelector).offset().top
        +
        //This will find the outer height of element
        $(elementOrSelector).outerHeight()
      );
    });
  }
}
