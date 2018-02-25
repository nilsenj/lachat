import {Component, Input, OnInit} from '@angular/core';
import {Thread} from "../../models/Thread";

@Component({
  selector: 'app-company-thread',
  templateUrl: './company-thread.component.html',
  styleUrls: ['./company-thread.component.scss']
})
export class CompanyThreadComponent implements OnInit {
  @Input('threads') threads: [Thread];
  constructor() { }

  ngOnInit() {
  }

}
