import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'

@Component({
  selector: 'app-customer-previous-order',
  templateUrl: './customer-previous-order.component.html',
  styleUrls: ['./customer-previous-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerPreviousOrderComponent implements OnInit {

  private customerId : string ;
  private previousOrders : any = [
  {
   "address": {
     "addressLine": "string",
     "city": "string",
     "district": "string",
     "pincode": 0,
     "state": "string"
   },
   "avgRating": 0,
   "expectedDate": "2018-04-20",
   "expectedTime": {
     "hour": "string",
     "minute": "string",
     "nano": 0,
     "second": "string"
   },
   "farmerStatus": "string",
   "kkdCustId": "string",
   "kkdFarmId": "string",
   "mobileNo": "string",
   "name": "previous1",
   "orderDeclineReason": "string",
   "orderId": "string",
   "orderPlacingDate": "2018-04-20",
   "orderReceivingDate": "2018-04-20",
   "orderStatus": "string",
   "orderType": "string",
   "otp": "string",
   "otpVerified": false,
   "productId": "string",
   "quantity": 0,
   "totalAmount": 0,
   "transactionId": "string",
   "validityOfOrder": "2018-04-20T10:59:42.039Z"
  },
  {
   "address": {
     "addressLine": "string",
     "city": "string",
     "district": "string",
     "pincode": 0,
     "state": "string"
   },
   "avgRating": 0,
   "expectedDate": "2018-04-20",
   "expectedTime": {
     "hour": "string",
     "minute": "string",
     "nano": 0,
     "second": "string"
   },
   "farmerStatus": "string",
   "kkdCustId": "string",
   "kkdFarmId": "string",
   "mobileNo": "string",
   "name": "previous2",
   "orderDeclineReason": "string",
   "orderId": "string",
   "orderPlacingDate": "2018-04-20",
   "orderReceivingDate": "2018-04-20",
   "orderStatus": "string",
   "orderType": "string",
   "otp": "string",
   "otpVerified": false,
   "productId": "string",
   "quantity": 0,
   "totalAmount": 0,
   "transactionId": "string",
   "validityOfOrder": "2018-04-20T10:59:42.039Z"
  }];
   constructor(private customerAuthenticationService : CustomerAuthenticationService) { }
   
   getdata(){
   this.customerAuthenticationService.getPreviousOrders(this.customerId).subscribe(results=>{
     console.log(results)
   this.previousOrders=results;
   },error=> {
     console.log(error);
   });
 }
   ngOnInit() {
    this.customerId = CustomerAuthenticationService.cus;
     //this.getdata();
      
   }}
 