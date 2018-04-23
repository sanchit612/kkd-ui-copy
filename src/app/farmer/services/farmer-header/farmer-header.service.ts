import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { App } from '../../config/app.config'; 

@Injectable()
export class FarmerHeaderService {
  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

   // Function to get farmer name and make service call to get farmer name from App
   getFarmerName(gotFarmerName) {
    return this.http.get(App.nameMapping+gotFarmerName)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   updateFarmerAddress(mobileNo,updatedInfo){
    return this.http.put(App.alternateAddressMapping+mobileNo,updatedInfo,{headers: this.headers})
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

    updateFarmerMobile(searchedFarmer,updatedInfo){
      return this.http.put(App.alternateMobileMapping+searchedFarmer,updatedInfo,{headers: this.headers})
      .map(data => data.json(),
      (error: any)=>this.handleError(error)); 
    }
    
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }
}
