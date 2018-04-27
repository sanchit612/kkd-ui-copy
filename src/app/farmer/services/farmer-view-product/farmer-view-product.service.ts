import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { viewProductServiceUrl } from '../../config/viewProductServiceUrl.config';


@Injectable()
export class FarmerViewProductService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  //getting all data of particular farmer from database service
  public getAllProducts() {
    return this.http.get(viewProductServiceUrl.viewProductUrl)
    .map(data => data.json(),
      error => this.handleError(error)
    )
  }

  //deleting a particular product from database service
  public deleteParticularProduct(id : any) {
      return this.http.delete(viewProductServiceUrl.Url+id)
      .map(data => data.status,
        error => this.handleError(error)
      )
  }

  //updating a particular product from database service
  public update(productSubmission){
    return this.http.put(viewProductServiceUrl.Url,productSubmission,{headers: this.headers})
     .map(data => data.json(),
    (error: any)=>this.handleError(error)); 
   }

   //handling errors
  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
