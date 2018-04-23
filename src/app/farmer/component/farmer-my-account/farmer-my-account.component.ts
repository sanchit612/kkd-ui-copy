//import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { FarmerHeaderService } from '../../service/farmer-header.service';
import { Farmer } from './farmer';

@Component({
  selector: 'app-farmer-my-account',
  templateUrl: './farmer-my-account.component.html',
  styleUrls: ['./farmer-my-account.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerMyAccountComponent implements OnInit {
   public searchedFarmer: string="kkdFarm1001";
   public farmerPhoto:string;
   public farmerId: string
   public farmerName : string;
   public farmerPincode: number;
   public farmerAddressLine: string;
   public farmerCity: string;
   public farmerDistrict: string;
   public farmerState: string;
   public farmerPrimary: boolean;
   public farmerAlternatePincode: number;
   public farmerAlternateAddressLine: string;
   public farmerAlternateCity: string;
   public farmerAlternateDistrict: string;
   public farmerAlternateState: string;
   public farmerAlternatePrimary: boolean;
   public farmerMobileNumber : string;
   public farmerAlternateNumber:number;

   farmer : Farmer = {
    addressLine:this.farmerAlternateAddressLine,
    city:this.farmerAlternateCity,
    district:this.farmerAlternateDistrict,
    state:this.farmerAlternateState,
    pincode:this.farmerAlternatePincode,
    primary:this.farmerAlternatePrimary,
   };

   constructor(private farmerHeaderService : FarmerHeaderService,
              ) {
               }            
                         
  ngOnInit() {
    

  }
  // Function to get farmer name and make service call to get farmer name from app
  searchFarmer(){
    this.farmerHeaderService.getFarmerName(this.searchedFarmer)
    .subscribe((res) =>{
      this.farmerPhoto=res.aadhaarData.photoUrl;
      this.farmerId=res.kkdFarmId;
      this.farmerName=res.aadhaarData.firstName;
      this.farmerPincode=res.aadhaarData.permanentAddress.pincode;
      this.farmerAddressLine=res.aadhaarData.permanentAddress.addressLine;
      this.farmerCity=res.aadhaarData.permanentAddress.city;
      this.farmerDistrict=res.aadhaarData.permanentAddress.district;
      this.farmerState=res.aadhaarData.permanentAddress.state;
      this.farmerPrimary=res.aadhaarData.permanentAddress.primary;
      this.farmerMobileNumber=res.mobileNo;
      // this.success.emit({
      //   'farmerName':this.farmerName
      // });
     },(error) =>{

    });
  }

  updateFarmerAddress(){
    this.farmer.addressLine=this.farmerAlternateAddressLine;
    this.farmer.city=this.farmerAlternateCity;
    this.farmer.district=this.farmerAlternateDistrict;
    this.farmer.state=this.farmerAlternateState;
    this.farmer.pincode=this.farmerAlternatePincode;
    this.farmer.primary=true;

    this.farmerHeaderService.updateFarmerAddress(this.farmerMobileNumber, this.farmer)
    .subscribe((res)=>{
      
    },(error)=>{
    });
  }

  updateFarmerMobile(){
    this.farmerHeaderService.updateFarmerMobile(this.farmerId, this.farmerAlternateNumber)
    .subscribe((res)=>{

    },(error)=>{

    });
  }
  //  updateFarmerMobile(searchedFarmer,updatedInfo){
  //     return this.http.put(App.alternateMobileMapping+searchedFarmer,updatedInfo,{headers: this.headers})
  //     .map(data => data.json(),
  //     (error: any)=>this.handleError(error)); 
  //   }

}

  