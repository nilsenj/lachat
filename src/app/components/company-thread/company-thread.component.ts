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
  @Input('threads') threads: [Thread];
  @Input('company') company: Company;
  @Input('activeThread') activeThread: any;
  activeThreadId: string | number = null;
  activeCompanyId: string | number = null;
  params: any;

  constructor(public route: ActivatedRoute, private threadService: ThreadService, private companyService: CompanyService) {
    if (this.activeThread) {
      this.activeThreadId = this.activeThread.id;
    }
    if (this.company) {
      this.activeCompanyId = this.company.id;
    }
    this.route.params.subscribe(params => {
      if (+params['id']) {
        let id: number = +params['id'];
        this.companyService.getCompany(id).subscribe((data) => {
          this.company = data;
          this.activeCompanyId = data.id;
          this.companyService.activeCompanyStatus.emit(data);
        });
        if (+params['threadId']) {
          let threadId: number = +params['threadId'];
          this.threadService.getThread(threadId).subscribe((thread) => {
            if (thread) {
              let id: number | string = thread.id;
              this.activeThread = thread;
              this.activeThreadId = id;
            }
          });
        }
      }
    });

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
