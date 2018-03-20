import {
    AfterViewInit,
    Component, ContentChild, ElementRef, Inject, Input, OnInit, QueryList, ViewChild,
    ViewChildren
} from '@angular/core';
import {Thread} from "../../models/Thread";
import {ThreadService} from "../../services/thread.service";
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/Message";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-thread-messages',
    templateUrl: './thread-messages.component.html',
    styleUrls: ['./thread-messages.component.scss']
})
export class ThreadMessagesComponent implements OnInit {
    @Input('thread') thread: Thread;
    public messages: Message[];
    public currentUser: any = {};

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
            console.log('messages load!');
            if (message) {
                this.messages.push(message);
            }
        });
    }

    ngOnInit(): void {
        if (this.thread) {
            this.messagesService.getMessages(this.thread.id).subscribe((messages) => {
                this.messages = messages;
                this.messagesService.messagesLoadStatus.emit(messages);
            });
        }
        this.threadService.activeThreadStatus.subscribe((thread) => {
            if (thread) {
                this.thread = thread;
                this.messagesService.getMessages(thread.id).subscribe((messages) => {
                    this.messages = messages;
                    this.messagesService.messagesLoadStatus.emit(messages);
                });
            }
        });
        this.messagesService.messagesLoadStatus.subscribe(() => {
            $("html").animate({
                scrollTop: $(document).innerHeight()
            }, 400);
        });
        this.messagesService.activeMessageStatus.subscribe(() => {
            $("html").animate({
                scrollTop: $(document).innerHeight()
            }, 400);
        });
    }
}
