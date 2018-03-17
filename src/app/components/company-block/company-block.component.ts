import { Component, OnInit } from '@angular/core';
import {ThreadService} from "../../services/thread.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../models/Company";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-block',
  templateUrl: './company-block.component.html',
  styleUrls: ['./company-block.component.scss']
})
export class CompanyBlockComponent implements OnInit {

  public sub: any;
  public id: number | string;
  public data: any;

  constructor(public route: ActivatedRoute, private threadService: ThreadService, private companyService: CompanyService) {
    this.sub = this.route.params.subscribe(params => {
      let id: number = +params['id'];
      this.id = id;
      console.log(params);
      this.companyService.getCompany(this.id).subscribe((data) => {
        this.data = data;
        this.companyService.activeCompanyStatus.emit(data);
      });
    });
  }

  ngOnInit() {
  }

}
