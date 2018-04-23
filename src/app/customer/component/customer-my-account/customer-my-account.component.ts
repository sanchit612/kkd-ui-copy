import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{CustomerAuthenticationService} from '../../services/customer-authentication.service';
import{UserDetails} from '../../config/user-details.config';
@Component({
  selector: 'app-customer-my-account',
  templateUrl: './customer-my-account.component.html',
  styleUrls: ['./customer-my-account.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerMyAccountComponent implements OnInit {
  public mobileNumber: string;
  public currentPassword: string;
  public newPassword: string;
  public reenterNewPassword: string;
  public userDetails ={};
 
  constructor(private customerAuthenticationService :CustomerAuthenticationService) { }

  ngOnInit() {
    this.customerAuthenticationService.changeCustomerId('kkdcust3001');
  }
  
  
  
  onSubmit(){
    if(this.newPassword == this.reenterNewPassword)
    {
    
      this.customerAuthenticationService.getUserDetails(this.mobileNumber)
            .subscribe((res) =>{this.userDetails = res;
            //console.log(res.password);
            if(this.currentPassword == res.password){
                  res.password = this.newPassword;
                  this.customerAuthenticationService.updatePassword(res.kkdCustId ,res )
                  .subscribe((updatedInfo) =>{
                    if(this.newPassword == updatedInfo.password){
                      alert("Password changed successfully");
                    }
                    
                    }, (error) =>{
                
                    })
            }else{
              alert("Incorrect current password");
            }
            }, (error) =>{
            alert ("Mobile number not registered");
            })
          }
    else{
      alert("Re-enter the new password correctly");
    }
  }

  validateUser(){
    this.customerAuthenticationService.getUserDetails(this.mobileNumber)
    .subscribe((res) =>{this.userDetails = res;
    //console.log(res.password);
    if(this.currentPassword == res.password){
      this.customerAuthenticationService.deleteProfile(res.kkdCustId)
            .subscribe((status) =>{
               alert("Profile deleted successfully");
        
        }, (error) =>{
    
        })
      }
      else{
        alert("Incorrect Password");
      }
    })
  }
}
