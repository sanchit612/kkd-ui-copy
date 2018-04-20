import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() event:EventEmitter<String> = new EventEmitter();

 searchInput: String = "";

 constructor() { }

 ngOnInit() {
}

 sendToParent(){
   this.event.emit(this.searchInput);
 }

}
