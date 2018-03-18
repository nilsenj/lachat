import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ThreadService} from "../../services/thread.service";
import {Thread} from "../../models/Thread";

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  public sub: any;
  public id: number | string;
  public data: any;

  constructor(public route: ActivatedRoute, private threadService: ThreadService) {
    this.sub = this.route.params.subscribe(params => {
      let id: number = +params['threadId'];
      this.id = id;
      if(id) {
        this.threadService.getThread(this.id).subscribe((data) => {
          this.data = data;
          this.threadService.activeThreadStatus.emit(data);
        });
      }
    });

  }

  ngOnInit() {
  }

}
