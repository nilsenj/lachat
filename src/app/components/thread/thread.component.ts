import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ThreadService} from "../../services/thread.service";

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  public sub: any;
  public id: number | string;
  public thread;

  constructor(public route: ActivatedRoute, private threadServide: ThreadService) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id: number = +params['id'];
      this.id = id;
      this.threadServide.activeThreadStatus.emit(id);
    });
    this.threadServide.getThread(this.id).subscribe((data) => {
      this.thread = data;
    });
  }

}
