import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {app} from "../../config/app";
import {arrays} from "../helpers/arrays";
import {ToastrService} from "./toastr.service";
import {Company} from "../models/Company";
import {Thread} from "../models/Thread";
import {Subject} from 'rxjs/Subject';
import {SideThread} from "../models/SideThread";

@Injectable()
export class ThreadService {

  /**
   *token field
   */
  public token: string;
  public activeThreadStatus = new Subject<any>();

  /**
   *
   * @param {Http} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(Http) private http: Http,
              private toastrService: ToastrService) {
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
   * get all threads for user
   *
   * @returns {Observable<R>}
   */
  getThreads(): Observable<Thread[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/threads', options)
      .map((response: Response) => response.json());
  }

  /**
   * get all threads for user sidebar
   * @returns {Observable<Thread[]>}
   */
  sideThreads(): Observable<SideThread[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/threads/sideThreads', options)
      .map((response: Response) => response.json());
  }

  /**
   * get thread by id
   *
   * @param {string} id
   * @returns {Observable<Thread>}
   */
  getThread(id: number | string): Observable<Thread> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/threads/' + id, options)
      .map((response: Response) => response.json());
  }
}
