import {map} from 'rxjs/operators';
import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

import {app} from "../../config/app";
import {User} from "../models/User";
import {arrays} from "../helpers/arrays";
import {ToastrService} from "./toastr.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  token: string;
  /**
   * emit events
   *
   * @type {EventEmitter}
   */
  public userEvent: EventEmitter<any> = new EventEmitter();
  public userChange = new EventEmitter();
  public userNeedsChange = new EventEmitter();
  public user: any;
  @Input() authenticated: boolean;

  constructor(@Inject(HttpClient) private http: HttpClient,
              private toastrService: ToastrService) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
   * register this asshole
   *
   * @param email
   * @param password
   * @returns {Observable<R>}
   */
  login(email: string, password: string): Observable<boolean> {
    return this.http.post(app.api_url + '/api/login', {email: email, password: password}).pipe(
      map((response: any) => {
          // login successful if there's a jwt token in the response
          const token = response && response.meta.token;
          if (token) {
            // set token property
            this.token = token;
            this.userEvent.emit(response);
            const name = response.data.name ? response.data.name : "";
            const id = response.data.id ? response.data.id : "";

            // store email and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({id: id, name: name, email: email, token: token}));
            this.getUser();
            this.userChange.emit(response);

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        }
      ));
  }

  getUser(): any {
    this.user = this.getAuthenticatedUser().subscribe((users) => {
      this.user = arrays.transformToArray(users);
      this.authenticated = true;
      this.userChange.emit(this.user);
    }, (error) => {
      this.user = [];
      this.authenticated = false;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('io');
      this.userChange.emit(null);
      this.logout();
    });

    return this.user;
  }

  /**
   * get all users
   *
   * @returns {Observable<R>}
   */
  getUsers(): Observable<User[]> {
    // get users from api
    return this.http.get(app.api_url + '/api/users').pipe(
      map((response: User[]) => response));
  }

  /**
   * get the authenticated user
   *
   * @returns {Observable<R>}
   */
  getAuthenticatedUser(): Observable<User> {
    // get users from api
    return this.http.get(app.api_url + '/api/user').pipe(
      map((response: User) => response));
  }

  /**
   * register this user
   *
   * @param name
   * @param email
   * @param password
   * @param confirm
   * @param role
   */
  register(name: string, email: string, password: string, confirm: string, role: boolean): Observable<boolean> {
    return this.http.post(app.api_url + '/api/register', {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirm,
      role: role
    }).pipe(
      map((response: User) => {
        // register successful if there's a jwt token in the response
        const token = response && response.token;
        if (token) {
          this.token = token;
          // set token property
          this.userEvent.emit(response);
          const userName = response.name ? response.name : "";
          const id = response.id ? response.id : 0;
          const user = {id: id, name: userName, email: email, token: token};
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.user = user;
          this.authenticated = true;
          this.userChange.emit(this.user);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  /**
   * logout fucking user
   */
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.userChange.emit(null);
    this.toastrService.add('info', 'You are logged out!');
  }
}
