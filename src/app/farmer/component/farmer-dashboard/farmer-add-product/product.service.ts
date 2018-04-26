import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {App} from './app.config';

@Injectable()
export class ProductService {

  
  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }    


  update(id,productSubmission){
       return this.http.post(App.nameMapping+id,productSubmission,{headers: this.headers})
        .map(data => data.json(),
       (error: any)=>this.handleError(error)); 
      }

}
