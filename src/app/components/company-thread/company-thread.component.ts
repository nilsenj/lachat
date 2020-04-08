import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";
import {ThreadService} from "../../services/thread.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../models/Company";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-thread',
  templateUrl: './company-thread.component.html',
  styleUrls: ['./company-thread.component.scss']
})
export class CompanyThreadComponent implements OnInit {
  @Input('thread') thread: Thread;
  @Input('activeThread') activeThread: any;
  activeThreadId: string | number = null;
  params: any;
  currentUser: any;

  constructor(public route: ActivatedRoute, private threadService: ThreadService, private companyService: CompanyService) {
    if (this.activeThread) {
      this.activeThreadId = this.activeThread.id;
    }
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.route.params.subscribe(params => {
      if (+params['threadId']) {
        const threadId = +params['threadId'];
        this.threadService.getThread(threadId).subscribe((thread) => {
          if (thread) {
            const id: number | string = thread.id;
            this.activeThread = thread;
            this.activeThreadId = id;
          }
        });
      }
    });

  }

  getThreadName(thread: Thread) {
    if (!!thread.participants && thread.participants.length > 2) {
      const participants = thread.participants.filter((part) => {
        return Number(part.user_id) !== Number(this.currentUser.id);
      });
      return participants[0].user.name + ' + ' + (participants.length - 1) + ' Participants';
    } else {
      const participants = thread.participants.filter((part) => {
        return Number(part.user_id) !== Number(this.currentUser.id);
      });
      return participants[0].user.name;
    }
  }

  ngOnInit() {
  }

  /**
   *
   * @param {number} threadId
   */
  changeActiveThreadId(threadId: number) {
    this.activeThreadId = threadId;
  }

}
