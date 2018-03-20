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
  private canSendMsg: boolean;
  private keys: string;

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
  }

  private sendForm(): void {
    this.msgForm = this.msgBuilder.group({
      msg: [this.model.msg, [
        Validators.maxLength(5000)]
      ]
    });
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

  triggerEmojis() {
    if (this.visibleEmojis) {
      this.visibleEmojis = false;
    } else {
      this.visibleEmojis = true;
    }
  }

  closeMsg(value: string) { // with type info
    this.visibleEmojis = false;
  }

  iconChanged(icon: string) {
    this.selectedIcon = icon;
    this.model.msg = this.model.msg + ':' + icon.trim() + ':';
  }

  switchEmoji(emojiStatus) {
    this.visibleEmojis = emojiStatus;
  }

}
