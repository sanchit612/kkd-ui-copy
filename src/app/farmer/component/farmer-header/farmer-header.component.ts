import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FarmerHeaderService } from '../../service/farmer-header.service';
@Component({
  selector: 'app-farmer-header',
  templateUrl: './farmer-header.component.html',
  styleUrls: ['./farmer-header.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerHeaderComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
 	public gotFarmerName: string="kkdFarm1001";
 	public farmerName : string;
  

   constructor(private farmerHeaderService : FarmerHeaderService) { }

  ngOnInit() {
  }

  // Function to get farmer name and make service call to get farmer name from app
   searchFarmer(){
   	this.farmerHeaderService.getFarmerName(this.gotFarmerName)
   	.subscribe((res) =>{
   		this.farmerName=res.aadhaarData.firstName;
   		this.success.emit({
   			'farmerName':this.farmerName
   		});
    	},(error) =>{

   	});
   }
  }
