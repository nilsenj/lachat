import {
  AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {Thread} from "../../models/Thread";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "../../services/toastr.service";
import {ThreadService} from "../../services/thread.service";
import {MessagesService} from "../../services/messages.service";
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-thread-message-input',
  templateUrl: './thread-message-input.component.html',
  styleUrls: ['./thread-message-input.component.scss']
})
export class ThreadMessageInputComponent implements OnInit {
  @Input('thread') thread: Thread;
  @Input() public msgForm: FormGroup;
  public visibleEmojis: boolean = false;
  public model: any = {};
  loading = false;
  error = '';
  public selectedIcon: string = "";
  public canSendMsg: boolean;

  constructor(private router: Router,
              private threadService: ThreadService,
              private messagesService: MessagesService,
              private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
              public msgBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.model = {
      msg: ""
    };
    this.sendForm();
    if (this.msgForm.valid) {
      this.canSendMsg = true;
    } else {
      this.canSendMsg = false;
    }
    this.setupMsgEvents();
  }

  /**
   *
   */
  send() {
    this.loading = true;
    if (!this.msgForm.valid) {
      this.toastrService.add("error",
        "Form not valid! Try once more");
    } else {
      if (this.thread.id) {
        this.messagesService.sendMsg(this.model.msg, this.thread.id)
          .subscribe((result) => {
            if (result) {
              this.messagesService.activeMessageStatus.emit(result);
              this.toastrService.add('info', 'Message Sent!');
              this.loading = false;
              this.model = {};
            } else {
              this.error = 'Message is not sent';
              this.loading = false;
            }
          }, (result) => {
            this.error = 'Message is not sent';
            this.loading = false;
          });
      } else {
        this.toastrService.add('error', 'Error during thread load')
      }
    }
    this.loading = false;
  }

  /**
   *
   */
  triggerEmojis(): void {
    if (this.visibleEmojis) {
      this.visibleEmojis = false;
    } else {
      this.visibleEmojis = true;
    }
  }

  /**
   *
   * @param {string} value
   */
  closeMsg(value: string) { // with type info
    this.visibleEmojis = false;
  }

  /**
   *
   * @param {string} icon
   */
  iconChanged(icon: string) {
    if (icon) {
      this.selectedIcon = icon;
      this.model.msg = this.model.msg + ':' + icon.trim() + ':';
    }
  }

  /**
   *
   * @param {boolean} emojiStatus
   */
  switchEmoji(emojiStatus: boolean) {
    this.visibleEmojis = emojiStatus;
  }

  private setupMsgEvents(): void {
    $(document).ready(() => {
      let that = this;
      let msg = this.model.msg;
      let inputHeight = $(".input-message").height();
      let msgBody = $('.wrap-message').height();
      let ratio = msgBody / inputHeight;
      let difference = msgBody - inputHeight;

      $(".input-message").on('keydown', (e => {
        $('.wrap-message')
          .css('height', $(e.target).height() + difference);
      }));
      $(".input-message").on('keyup', (e => {
        $('.wrap-message')
          .css('height', $(e.target).height() + difference);
        if (e.keyCode == 13 && e.shiftKey) {
          e.stopPropagation();
        } else if (e.keyCode == 13) {
          console.log('msg sent');
          if (that.msgForm.valid) {
            that.send();
          }
          that.model.msg = "";
        }
      }));
    });
  }

  private sendForm(): void {
    this.msgForm = this.msgBuilder.group({
      msg: [this.model.msg, [
        Validators.maxLength(5000)]
      ]
    });
  }
}
