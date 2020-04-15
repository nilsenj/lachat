import {map} from 'rxjs/operators';
import {Inject, Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {ToastrService} from "./toastr.service";
import {app} from "../../config/app";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ImageUploadService {
  /**
   *
   * @param {HttpClient} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(HttpClient) private http: HttpClient,
              private toastrService: ToastrService) {
  }


  public uploadImage(image: File): Observable<string | any> {
    const formData = new FormData();
    formData.append('avatar', image);

    return this.http.post(app.api_url + '/api/profile/uploadAvatar', formData).pipe(map(((json: any) =>  json.imageUrl)));
  }
}
