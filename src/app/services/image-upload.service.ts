import {map} from 'rxjs/operators';
import {Inject, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {ToastrService} from "./toastr.service";
import {app} from "../../config/app";

@Injectable()
export class ImageUploadService {
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


  public uploadImage(image: File): Observable<string | any> {
    // add authorization header with jwt token
    const headers = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: headers});

    const formData = new FormData();

    formData.append('avatar', image);

    return this.http.post(app.api_url + '/api/profile/uploadAvatar', formData, options).pipe(map(((json: any) =>  json.imageUrl)));
  }
}
