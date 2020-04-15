import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ThreadService} from "../../services/thread.service";
import {Thread} from "../../models/Thread";
import {take, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Participant} from "../../models/Participant";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit, OnDestroy {

  public activeThreadId: number | string;
  public thread;
  public threads: any = [Thread];
  public loading = false;
  public threadId: string | number = 0;
  public error = '';
  public emitter = new EventEmitter();
  destroy$: Subject<boolean> = new Subject<boolean>();
  public activeThread: any;
  public openSelectThreadStatus = false;
  public sub: any;
  public id: number | string;
  public data: any;
  currentUser: any;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              public threadsService: ThreadService,
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.threadsService.getThreads().subscribe(data => {
      this.threads = data;
      this.emitter.emit('threads_load');
      this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
        if (+params['threadId']) {
          this.id = +params['threadId'];
          this.threadsService.getThread(this.id).pipe(takeUntil(this.destroy$)).subscribe((thread: Thread) => {
            if (thread) {
              this.selectThread(thread);
            }
          });
        }
      });
    });
  }

  openSelectThread() {
    if (this.openSelectThreadStatus) {
      this.openSelectThreadStatus = false;
    } else {
      this.openSelectThreadStatus = true;
    }
  }

  getThreadName(thread: Thread) {
    if (!!thread.participants && thread.participants.length > 2) {
      const participants = thread.participants.filter((part) => {
        return Number(part.user_id) !== Number(this.currentUser.id);
      });
      return participants[0].user.name + ' + ' + (participants.length - 1) + ' Participants';
    } else {
      if (!!thread.participants) {
        const participants = thread.participants.filter((part) => {
          return Number(part.user_id) !== Number(this.currentUser.id);
        });
        return participants[0].user.name;
      }
    }
  }

  selectThread(thread: Thread) {
    console.log('selectThread');
    this.threadId = thread.id;
    this.thread = thread;
    this.openSelectThreadStatus = false;
  }

  changeActiveThreadId(threadId: number) {
    this.activeThreadId = threadId;
  }

  getParticipant(participants: Participant[]): Participant {
    if (!!participants) {
      const filteredParticipants = participants.filter((part) => {
        return Number(part.user_id) !== Number(this.currentUser.id);
      });

      return filteredParticipants.pop();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
