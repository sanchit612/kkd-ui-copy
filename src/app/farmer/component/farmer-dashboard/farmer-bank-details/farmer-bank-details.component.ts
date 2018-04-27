import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankDetailsService } from '../../../../services/bank-details.service'


@Component({
  selector: 'app-farmer-bank-details',
  templateUrl: './farmer-bank-details.component.html',
  styleUrls: ['./farmer-bank-details.component.css'],
  providers:[BankDetailsService]
})
export class FarmerBankDetailsComponent implements OnInit {

	rForm: FormGroup;
	accountNo : String;
  accountName : String;
  ifscCode : String;
  post:any;  
  bankDetailsSubmission;

  constructor(private bankDetailsService : BankDetailsService, private fb: FormBuilder,public router: Router) { 
  	this.rForm = fb.group({
      accountNo : [null, Validators.compose([Validators.required])],
      accountName : [null, Validators.compose([Validators.required])],
      ifscCode : [null, Validators.compose([Validators.required])],
  })
  }

  addBankDetails(post){
    console.log(post);
  	this.bankDetailsSubmission = {
      "accountNo" : post.accountNo,
      "accountName" : post.accountName,
      "ifscCode" : post.ifscCode,
    }
    console.log(this.bankDetailsSubmission)
    this.bankDetailsService.saveAccountDetails(this.bankDetailsSubmission).subscribe((res) => {

      alert("Your bank account details has been successfully added.");

    },(error) => {
      console.log(error)

    })
  }
  ngOnInit() {
  }

}
