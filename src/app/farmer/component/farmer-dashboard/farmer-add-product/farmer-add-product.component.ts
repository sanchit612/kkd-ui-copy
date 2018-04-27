import { Component, OnInit } from '@angular/core';
//import { Product } from './product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from './product.service';


@Component({
  selector: 'app-farmer-add-product',
  templateUrl: './farmer-add-product.component.html',
  styleUrls: ['./farmer-add-product.component.css'],
  providers: [ ProductService ]
})
export class FarmerAddProductComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  public kkdFarmId: any="KKDFARM1002";
  public imageUrl:any;
  public description: any;
  public price: any;
  public bulkOrderPrice: any;
  public quantity: any;
  public productName: any;
  public available: any;
  public url:any;
  productSubmission;

  ngOnInit() {
  }
 

  constructor(private productService: ProductService,private fb: FormBuilder,public router: Router) { 
    this.rForm = fb.group({
      description : [null, Validators.compose([Validators.required])],
      price : [null, Validators.compose([Validators.required])],
      bulkOrderPrice : [null, Validators.compose([Validators.required])],
      quantity : [null, Validators.compose([Validators.required])],
      available : ''

  })
}


  selectChangeHandler (event: any){
    this.productName=event.target.value;
  }

  onFileSelected(event: any){
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.imageUrl = event.target.result      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  check(post){
    //alert(this.productName);
    //alert(post.available);
     //alert(this.rForm.get('available'));
    // alert(post.description);
     //alert(post.price);
    // alert(this.bulkPrice);
    // alert(this.quantity);
     //alert(this.imageUrl);

    this.productSubmission = {
      

      "kkdFarmId":this.kkdFarmId,
    "description":post.description,
    "price":post.price,
    "bulkOrderPrice":post.bulkOrderPrice,
    "quantity":post.quantity,
    "productName":this.productName,
    "available":post.available,
    "imageUrl":this.imageUrl,
    }
    console.log(this.productSubmission)
    this.productService.update(this.kkdFarmId,this.productSubmission).subscribe((res) => {
      console.log(res);
      alert("Your product has been submitted");
      this.router.navigate(['farmer/viewProduct']);

    },(error) => {
      console.log(error)
      alert("Product not added");
    });


      
  
    
  }
}
