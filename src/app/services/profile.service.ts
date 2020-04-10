import {Inject, Injectable} from '@angular/core';
import {ToastrService} from "./toastr.service";
import {Profile} from "../models/Profile";
import {app} from "../../config/app";
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  /**
   *token field
   */
  public token: string;

  /**
   *
   * @param {Http} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(Http) private http: Http,
              private toastrService: ToastrService) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
   * get all profiles
   *
   * @returns {Observable<R>}
   */
  getProfiles(): Observable<Profile[]> {
    // add authorization header with jwt token
    const headers = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/profile/index', options)
      .map((response: Response) => response.json());
  }

  /**
   * get user's profile
   *
   * @returns {Observable<Profile>}
   */
  getProfile(): Observable<Profile> {
    // add authorization header with jwt token
    const headers = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/profile', options)
      .map((response: Response) => response.json());
  }

  /**
   * get users profile
   *
   * @returns {Observable<Profile>}
   */
  updateProfile(profile: Profile): Observable<Profile> {
    // add authorization header with jwt token
    const headers = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.post(app.api_url + '/api/profile/update', profile, options)
      .map((response: Response) => response.json());
  }
}
