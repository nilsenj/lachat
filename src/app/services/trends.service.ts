import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {app} from "../../config/app";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrendsService {
  /**
   *
   * @param {HttpClient} http
   */
  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  public getTrends(): Observable<any> {
    return this.http.get(app.api_url + '/api/trends').pipe(map(((json: any) => json)));
  }
}
