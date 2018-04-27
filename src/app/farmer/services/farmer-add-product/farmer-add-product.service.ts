import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {addProductServiceUrl} from '../../config/addProductServiceUrl.config';

@Injectable()
export class FarmerAddProductService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }    


  update(id,productSubmission){
       return this.http.post(addProductServiceUrl.nameMapping+id,productSubmission,{headers: this.headers})
        .map(data => data.json(),
       (error: any)=>this.handleError(error)); 
      }


}
