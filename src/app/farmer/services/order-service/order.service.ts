import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { microServicesUrl } from '../../config/microServicesUrl.config';

@Injectable()
export class OrderService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

}
