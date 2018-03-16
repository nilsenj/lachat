import {EventEmitter, Inject, Injectable, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {app} from "../../config/app";
import {arrays} from "../helpers/arrays";
import {ToastrService} from "./toastr.service";
import {Company} from "../models/Company";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CompanyService {

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
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
   * get all companies for user
   *
   * @returns {Observable<R>}
   */
  getCompanies(): Observable<Company[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(app.api_url + '/api/companies', options)
      .map((response: Response) => response.json());
  }
}
