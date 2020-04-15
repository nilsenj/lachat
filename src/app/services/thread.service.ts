import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';

import {app} from "../../config/app";
import {ToastrService} from "./toastr.service";
import {Thread} from "../models/Thread";
import {SideThread} from "../models/SideThread";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ThreadService {
  public activeThreadStatus = new EventEmitter();

  /**
   *
   * @param {HttpClient} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(HttpClient) private http: HttpClient,
              private toastrService: ToastrService) {
  }

  /**
   * get all threads for user
   *
   * @returns {Observable<R>}
   */
  getThreads(): Observable<Thread[]> {
    // get users from api
    return this.http.get(app.api_url + '/api/threads')
      .pipe(map((response: Thread[]) => response));
  }

  /**
   * get all threads for user sidebar
   * @returns {Observable<Thread[]>}
   */
  sideThreads(): Observable<SideThread[]> {
    // get users from api
    return this.http.get(app.api_url + '/api/threads/sideThreads')
      .pipe(map((response: SideThread[]) => response));
  }

  /**
   * get thread by id
   *
   * @param {string} id
   * @returns {Observable<Thread>}
   */
  getThread(id: number | string): Observable<Thread> {
    // get users from api
    return this.http.get(app.api_url + '/api/threads/' + id)
      .pipe(map((response: Thread) => response));
  }
}
