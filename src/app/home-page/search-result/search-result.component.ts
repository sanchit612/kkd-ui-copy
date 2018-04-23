import { Component, OnInit, Input } from '@angular/core';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SearchService } from '../../services/search.service';
import { SearchConfig } from '../../config/search.config'

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css'],
	providers: [SearchService]
})
export class SearchResultComponent implements OnInit {

	 public searchItemName : String;
	public itemList : any = [];

	constructor(private searchService : SearchService) { }

	ngOnInit() {
	}

	@Input()
	set itemName(itemName : String){
		this.searchItemName=itemName;
		if(this.searchItemName){
			this.searchService.searchItem(SearchConfig.apiUrl).subscribe((res)=>{
				this.itemList=res;
			},error=>this.handleError(error))
		}
		
	}

	storeItem(){
		this.searchService.searchItem(SearchConfig.apiUrl).subscribe((res)=>{
			this.itemList=res;
		},error=>this.handleError(error))
	}

	private handleError(error) {
		console.log("Logging the error occured in the service");
	}
}
