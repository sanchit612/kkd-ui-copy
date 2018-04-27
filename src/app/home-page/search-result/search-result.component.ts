
import { Component, OnInit, Input } from '@angular/core';
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

	public searchItemName: String;		// String to store search keyword
	public itemList: any = [];			// Array to store search result
	public searchFlag = false;			// Flag to indicate that a search occured
	public resultFlag = false;			// Flag to indicate that a successful result got produced

	constructor(private searchService: SearchService) { }

	ngOnInit() {
	}

	@Input()							// Trigger search when data is binded onto search keyword
	set itemName(itemName: String) {
		this.searchItemName = itemName;
		if (this.searchItemName) {
			this.itemList = null;
			this.searchFlag = true;		// Set search flag to true to indicate that a search occured
			this.searchService.searchItem(SearchConfig.apiUrl + this.searchItemName).subscribe((res) => {
				this.itemList = res;		// Store the result into array variable
				if (this.itemList.length > 0) {
					this.resultFlag = true;	//Set result to true if some result is returned
					console.log("Data Found\n" + this.resultFlag);
				}
				else {
					this.resultFlag = false;	//Set result flag to false if empty array is returned 
					console.log("No Data found\n" + this.itemList);
				}

			}, error => this.handleError(error))
		}

	}

	private handleError(error) {
		console.log("Logging the error occured in the  search-result component");
	}
}
