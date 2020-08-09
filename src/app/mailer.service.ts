import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MailerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  constructor(private http: HttpClient) { }
  sendMail(params): Observable<any> {
    const url = 'http://abhay.lindasports.in/api/send_plain_mail';
  
    return this.http.post(url,params,this.httpOptions);
  }
}
