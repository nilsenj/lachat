import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";
import {ThreadService} from "../../services/thread.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../models/Company";

@Component({
  selector: 'app-company-thread',
  templateUrl: './company-thread.component.html',
  styleUrls: ['./company-thread.component.scss']
})
export class CompanyThreadComponent implements OnInit {
  @Input('threads') threads: [Thread];
  @Input('company') company: [Company];
  @Input('activeThread') activeThread: any;
  activeThreadId: number = null;

  constructor(public route: ActivatedRoute, private threadService: ThreadService) {
  }

  ngOnInit() {
    if (this.activeThread) {
      this.activeThreadId = this.activeThread.id;
    }
  }

  /**
   *
   * @param {number} threadId
   */
  changeActiveThreadId(threadId: number) {
    this.activeThreadId = threadId;

  }

}
