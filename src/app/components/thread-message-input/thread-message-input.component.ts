import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ThreadService} from "../../services/thread.service";
import {MessagesService} from "../../services/messages.service";
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-thread-message-input',
  templateUrl: './thread-message-input.component.html',
  styleUrls: ['./thread-message-input.component.scss']
})
export class ThreadMessageInputComponent implements OnInit {
  @Input('thread') thread: Thread;
  @Input() public msgForm: FormGroup;
  public visibleEmojis = false;
  public model: any = {};
  loading = false;
  error = '';
  public selectedIcon = "";
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
      this.toastrService.error("Form not valid! Try once more");
    } else {
      if (this.thread.id) {
        this.messagesService.sendMsg(this.model.msg, this.thread.id)
          .subscribe((result) => {
            if (result) {
              this.messagesService.activeMessageStatus.emit(result);
              this.toastrService.info('Message Sent!');
              this.loading = false;
              this.model = {};
              $(".input-message").trigger('keyup');
            } else {
              this.error = 'Message is not sent';
              this.loading = false;
            }
          }, (result) => {
            this.error = 'Message is not sent';
            this.loading = false;
          });
      } else {
        this.toastrService.error('Error during thread load');
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
   */
  closeMsg() { // with type info
    this.visibleEmojis = false;
  }

  /**
   *
   * @param {string} icon
   */
  iconChanged(icon: string) {
    if (icon && typeof icon !== 'undefined' && icon !== undefined && icon !== 'undefined') {
      this.selectedIcon = icon;
      if (!this.model.msg) {
        this.model.msg = '';
      }
      this.model.msg = this.model.msg + ':' + icon.trim() + ':';
      $('.input-message').trigger('focus');
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
      const that = this;
      const msg = this.model.msg;
      const inputHeight = $(".input-message").height();
      const msgBody = $('.wrap-message').height();
      const difference = msgBody - inputHeight;

      $(".input-message").on('focus', (e) => {
        this.setCaretAtEnd($(".input-message"));
        this.setInputWrapperAlignment($(e.target), difference);
      });
      $(".input-message").on('keydown', (e => {
        this.setInputWrapperAlignment($(e.target), difference);
      }));
      $(".input-message").on('keyup', (e => {
        this.setInputWrapperAlignment($(e.target), difference);
        if (e.keyCode === 13 && e.shiftKey) {
          e.stopPropagation();
        } else if (e.keyCode === 13) {
          if (that.msgForm.valid) {
            that.send();
            $(".input-message").trigger('focus');
            this.closeMsg();
          }
          that.model.msg = "";
        }
      }));
    });
  }

  /**
   *
   * @param elem
   * @param difference
   */
  private setInputWrapperAlignment(elem, difference): void {
    $('.wrap-message')
      .css('height', elem.height() + difference);
  }

  private setCaretAtEnd(elem) {
    const $thisVal = elem.val();
    elem.val('').val($thisVal);
  }

  private sendForm(): void {
    this.msgForm = this.msgBuilder.group({
      msg: [this.model.msg, [
        Validators.maxLength(5000)]
      ]
    });
  }
}
