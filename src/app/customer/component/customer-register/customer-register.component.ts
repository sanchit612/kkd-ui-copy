import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../../customer/registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
  providers:[ RegistrationLoginService ]
})
export class CustomerRegisterComponent implements OnInit {

  rForm: FormGroup;
	post:any;   
	mobileNo:String;
	password:String;
	confirmPassword:String;

  constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) {
    this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])],
			'confirmPassword' : ['',[Validators.required]],
			'cities' : [false, Validators.required],
		},{validator: this.checkIfMatchingPasswords});
   }


  ngOnInit() {
    this.rForm.get('mobileNo');
    this.rForm.get('mobileNo').disable();
  }
  checkIfMatchingPasswords(group: FormGroup) {
		let passwordField= group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if(passwordField.value !== confirmPasswordField.value ) {
			return confirmPasswordField.setErrors({notEquivalent: true})
		}else {
			return confirmPasswordField.setErrors(null);
		}
  }
  registerFarmer(post) {
		var farmerToRegister={
			'mobileNo':post.mobileNo,
      'password':post.password,
    }

    this.registrationService.addCustomer(farmerToRegister).subscribe((res) =>{
			alert("Successfully registered");
			localStorage.setItem("token",res.results.token);
			localStorage.setItem("kkdFarmId",res.results.kkdFarmId);
			this.router.navigate(['/customer/dashboard']);
		}, (err) =>{
			if(err.status=401){
				alert("Invalid Credentials")
			}
			else{
				alert("Server down")
			}
		})
	}
}
