import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { viewProductServiceUrl } from '../../config/viewProductServiceUrl.config';


@Injectable()
export class FarmerViewProductService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  public getAllProducts() {
    return this.http.get(viewProductServiceUrl.viewProductUrl)
    .map(data => data.json(),
      error => this.handleError(error)
    )
  }

  public deleteParticularProduct(id : any) {
    //alert(url);
      return this.http.delete(viewProductServiceUrl.Url+id)
      .map(data => data.status,
        error => this.handleError(error)
      )
  }

  public update(productSubmission){
    return this.http.put(viewProductServiceUrl.Url,productSubmission,{headers: this.headers})
     .map(data => data.json(),
    (error: any)=>this.handleError(error)); 
   }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
