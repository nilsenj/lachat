import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "./toastr.service";
import {app} from "../../config/app";
import {Message} from "../models/Message";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MessagesService {
  public activeMessageStatus = new EventEmitter();
  public messagesLoadStatus = new EventEmitter();

  /**
   *
   * @param {HttpClient} http
   * @param {ToastrService} toastrService
   */
  constructor(@Inject(HttpClient) private http: HttpClient,
              private toastrService: ToastrService) {
  }

  /**
   * get all messages for thread
   *
   * @returns {Observable<R>}
   */
  getMessages(threadId: number | string): Observable<Message[]> {
    // get users from api
    return this.http.get(app.api_url + '/api/messages/thread/' + threadId)
      .pipe(map((response: Message[]) => response));
  }

  /**
   * get message for user
   *
   * @returns {Observable<R>}
   */
  getMessage(messageId: number | string): Observable<Message> {
    // get users from api
    return this.http.get(app.api_url + '/api/messages/' + messageId)
      .pipe(map((response: Message) => response));
  }

  /**
   * send message
   *
   * @param {string} msg
   * @param {number} threadId
   * @returns {Observable<boolean>}
   */
  sendMsg(msg: string, threadId: number): Observable<boolean> {
    return this.http.post(app.api_url + '/api/messages', {
      msg: msg,
      threadId: threadId
    }).pipe(map((response: boolean) => response));
  }
}
