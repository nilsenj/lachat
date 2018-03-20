import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Thread} from "../models/Thread";
import {Observable} from "rxjs/Rx";
import {ToastrService} from "./toastr.service";
import {app} from "../../config/app";
import {SideThread} from "../models/SideThread";
import {Message} from "../models/Message";

@Injectable()
export class MessagesService {

    /**
     *token field
     */
    public token: string;
    public activeMessageStatus = new EventEmitter();
    public messagesLoadStatus = new EventEmitter();

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
     * get all messages for thread
     *
     * @returns {Observable<R>}
     */
    getMessages(threadId: number | string): Observable<Message[]> {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.get(app.api_url + '/api/messages/thread/' + threadId, options)
            .map((response: Response) => response.json());
    }

    /**
     * get message for user
     *
     * @returns {Observable<R>}
     */
    getMessage(messageId: number | string): Observable<Message> {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        return this.http.get(app.api_url + '/api/messages/' + messageId, options)
            .map((response: Response) => response.json());
    }

    /**
     * send message
     *
     * @param {string} msg
     * @param {number} threadId
     * @returns {Observable<boolean>}
     */
    sendMsg(msg: string, threadId: number): Observable<boolean> {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});

        return this.http.post(app.api_url + '/api/messages', {
            msg: msg,
            threadId: threadId
        }, options).map((response: Response) => response.json());
    }
}
