import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchItem(url) {
    console.log(url)
    return this.http.get(url)
      .map(data => data.json(),
        error => this.handleError(error)
      )
  }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
