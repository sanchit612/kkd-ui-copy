import { Component, OnInit,Input } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
@Component({
  selector: 'app-customer-current-order',
  templateUrl: './customer-current-order.component.html',
  styleUrls: ['./customer-current-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerCurrentOrderComponent implements OnInit {
 private customerId : string ;
 private currentOrders : any = [
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
  "name": "string",
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
  "name": "string",
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
  this.customerAuthenticationService.getCurrentOrders(this.customerId).subscribe(results=>{
    console.log(results)
  this.currentOrders=results;
  },error=> {
    console.log(error);
  });
}
  ngOnInit() {
   this.customerId = CustomerAuthenticationService.cus;
    //this.getdata();
     
  }}


