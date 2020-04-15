import {Inject, Injectable} from '@angular/core';
import {ToastrService} from "./toastr.service";
import {Profile} from "../models/Profile";
import {app} from "../../config/app";
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../models/User";


@Injectable()
export class ProfileService {
  /**
   *
   * @param {HttpClient} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(HttpClient) private http: HttpClient,
              private toastrService: ToastrService) {
  }

  /**
   * get all profiles
   *
   * @returns {Observable<R>}
   */
  getProfiles(): Observable<Profile[]> {
    // get users from api
    return this.http.get(app.api_url + '/api/profile/index')
      .pipe(map((response: Profile[]) => response));
  }

  /**
   * get user's profile
   *
   * @returns {Observable<Profile>}
   */
  getProfile(): Observable<Profile> {
    // get users from api
    return this.http.get(app.api_url + '/api/profile')
      .pipe(map((response: Profile) => response));
  }

  /**
   * get users profile
   *
   * @returns {Observable<Profile>}
   */
  updateProfile(profile: Profile): Observable<{user: User}> {
    // get users from api
    return this.http.post(app.api_url + '/api/profile/update', profile)
      .pipe(map((response: {user: User}) => response));
  }
}
