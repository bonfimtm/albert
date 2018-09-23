import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class IgService {

  private baseUrl = 'https://bonfimtm-services.herokuapp.com/albert/instagram';
  private bioUrl = this.baseUrl;
  private mediaRecentUrl = `${this.baseUrl}/feed`;
  private options = { withCredentials: false };

  constructor(private http: Http) {
  }

  getBio(): Observable<any[]> {
    return this.http.get(this.bioUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMediaRecent(): Observable<any[]> {
    return this.http.get(this.mediaRecentUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json().data || [];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
