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
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (+params['id']) {
        let id: number = +params['id'];
        this.companyService.getCompany(id).subscribe((data) => {
          this.company = data;
          this.activeCompanyId = data.id;
          this.companyService.activeCompanyStatus.emit(data);
        });
        this.threadService.activeThreadStatus.subscribe((data) => {
          if (data) {
            let id: number = data.id;
            this.activeThread = data;
            this.activeThreadId = data.id;
          }
        });
      }
    });
  }

  /**
   *
   * @param {number} threadId
   */
  changeActiveThreadId(threadId: number) {
    this.activeThreadId = threadId;

  }

}
