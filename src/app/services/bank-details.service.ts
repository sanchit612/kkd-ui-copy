import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AddBankDetails } from '../config/bankDetails.config';

@Injectable()
export class BankDetailsService {

	constructor(private http : Http) { }
	private headers = new Headers({ 'Content-Type': 'application/json'});

	saveAccountDetails(bankDetails){
		return this.http.put(AddBankDetails.addBankDetails_api+"KKDFARM1000/accounts", bankDetails , {headers: this.headers})
		.map(data => data.json(),
      //(error: any)=>this.handleError(error));
      (err)=> console.log(err));
	}
}
