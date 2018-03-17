import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  public companies: any = [Company];
  public loading = false;
  public company: Company;
  public companyId: string | number = 0;
  public error = '';
  public emitter = new EventEmitter();
  public activeThread: any;
  public openSelectCompanyStatus: boolean = false;

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
        this.emitter.emit('companies_load');
      });
    });
    this.threadsService.activeThreadStatus.subscribe((thread) => {
      this.emitter.subscribe((data) => {
        if (data == 'companies_load') {
          console.log('Event: companies_load');
          this.companies.forEach((company, index, arr) => {
            if (company.id == thread.company_id) {
              this.companyId = company.id;
              this.company = company;
            }
          });
        }
        this.activeThread = thread;
      });
    });
  }

  openSelectCompany() {
    if (this.openSelectCompanyStatus) {
      this.openSelectCompanyStatus = false;
    } else {
      this.openSelectCompanyStatus = true;
    }
  }

  selectCompany(company: Company) {
    this.companyId = company.id;
    this.company = company;
    this.openSelectCompanyStatus = false;
  }
}
