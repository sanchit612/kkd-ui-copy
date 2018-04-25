import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SearchConfig} from '../config/search.config'
@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  getAllProducts(searchQuery:string){
    let url:string;
    console.log("search by"+searchQuery);
    if(searchQuery!=undefined){
      url=SearchConfig.searchSpecificProducts+searchQuery;
    }
    else{
      url=SearchConfig.searchProducts;
    }
    console.log(url);
    return this.http.get(url).
    map((data)=> data.json(),
  (err)=> console.log("in service"+err))
  }
}
