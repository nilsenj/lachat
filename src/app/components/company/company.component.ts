import {Component, EventEmitter, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "../../services/toastr.service";
import {CompanyService} from "../../services/company.service";
import {ThreadService} from "../../services/thread.service";
import {Company} from "../../models/Company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {


  public sub: any;
  public activeThreadId: number | string;
  public thread;
  companies: any = [Company];
  loading = false;
  panel: number | string;
  error = '';
  public emitter = new EventEmitter();

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private companyService: CompanyService,
              private threadsService: ThreadService,
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // reset login status
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
      this.threadsService.getThreads().subscribe(data => {
        this.companies.forEach(function (company, companyIndex, companyArr) {
          company.threads = [];
          data.forEach(function (thread, index, arr) {
            if (company.id == thread.company_id) {
              company.threads.push(thread);
            }
          });
        });
      });
    });
  }

  triggerThreadCollapse(id: number | string) {
    this.panel = id;
  }
}
