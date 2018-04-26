import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{CustomerAuthenticationService} from '../../services/customer-authentication.service';
import{UserDetails} from '../../config/user-details.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-my-account',
  templateUrl: './customer-my-account.component.html',
  styleUrls: ['./customer-my-account.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerMyAccountComponent implements OnInit {
  post:any;
  rForm: FormGroup;
  rFormDeleteProfile : FormGroup;
  public mobileNumber:string="";
  public currentPassword: string="";
  public newPassword: string="";
  public reenterNewPassword: string="";
  public userDetails ={};
  public mobileNumberDeleteProfile : String="";
  public currentPasswordDeleteProfile: string="";

  constructor(private customerAuthenticationService :CustomerAuthenticationService,private fb: FormBuilder,public router: Router) { 
    this.rForm = fb.group({
    mobileNumber : [null, Validators.compose([Validators.required])],
    currentPassword : [null, Validators.compose([Validators.required])],
    newPassword : [null, Validators.compose([Validators.required])],
    reenterNewPassword: [null, Validators.compose([Validators.required])],

})
   this.rFormDeleteProfile = fb.group({
    mobileNumberDeleteProfile : [null, Validators.compose([Validators.required])],
    currentPasswordDeleteProfile : [null, Validators.compose([Validators.required])],
  

})
}

  ngOnInit() {
    
   this.customerAuthenticationService.changeCustomerId("kkdcust2000");
  }
  
  
  
  onSubmit(post){
    
  this.mobileNumber=post.mobileNumber;
  this.currentPassword=post.currentPassword;
  this.newPassword=post.newPassword;
  this.reenterNewPassword=post.reenterNewPassword;
    var regularExpression  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!(isNaN(+this.mobileNumber)) && this.mobileNumber.length==10 ){
    if(this.currentPassword.length && this.newPassword.length && this.reenterNewPassword.length ){
    if(regularExpression.test(this.newPassword)){
      if(this.newPassword == this.reenterNewPassword)
    {
    
      this.customerAuthenticationService.getUserDetails(this.mobileNumber)
            .subscribe((res) =>{this.userDetails = res;
            if(!(res == null)){
            if(this.currentPassword == res.password){
                  res.password = this.newPassword;
                  this.customerAuthenticationService.updatePassword(res.kkdCustId ,res )
                  .subscribe((updatedInfo) =>{
                    if(this.newPassword == updatedInfo.password){
                      alert("Password changed successfully");
                    }
                    
                    }, (error) =>{
                      alert ("Mobile number not registered");
                    })
            }else{
              alert("Incorrect current password");
            }}else{
              alert ("Mobile number not registered");
            }
            }, (error) =>{
            alert ("Mobile number not registered");
            })
          }
    else{
      alert("Re-enter the new password correctly");
    }}
    else{
      alert("New password must contain at least one number and one uppercase"+ 
      " and one lowercase and one special case, and at least 8 characters");
    }}
    else{
      alert("Please fill all the fields");
    }}
    else{
      alert("Enter a valid mobile number");
    }
  }
  

  validateUser(post){
    this.mobileNumberDeleteProfile=post.mobileNumberDeleteProfile;
    this.currentPasswordDeleteProfile=post.currentPasswordDeleteProfile;
    if(!(isNaN(+this.mobileNumberDeleteProfile)) && this.mobileNumberDeleteProfile.length==10 ){
    if(this.currentPasswordDeleteProfile.length){
    this.customerAuthenticationService.getUserDetails(this.mobileNumberDeleteProfile)
    .subscribe((res) =>{this.userDetails = res;
    //console.log(res.password);
    if(!(res == null)){
    if(this.currentPasswordDeleteProfile == res.password){
      this.customerAuthenticationService.deleteProfile(res.kkdCustId)
            .subscribe((status) =>{
               alert("Profile deleted successfully");
        
        }, (error) =>{
               alert("Internal Error : Can't delete right now")
        })
      }
      else{
        alert("Incorrect Password");
      }}else{
        alert ("Mobile number not registered");
      }
    })
  }else{
    alert ("Password field cannot be empty");
  }}else{
    alert("Enter a valid mobile number");
  }
}


 
}
