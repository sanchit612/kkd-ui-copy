import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-farmer-add-product',
  templateUrl: './farmer-add-product.component.html',
  styleUrls: ['./farmer-add-product.component.css'],
  providers: [ ProductService ]
})
export class FarmerAddProductComponent implements OnInit {


  public kkdFarmId: any="KKDFARM1001";
  public imageUrl:any;
  public description: any;
  public price: any;
  public bulkPrice: any;
  public quantity: any;
  public productName: any;
  public available: boolean;

  ngOnInit() {
  }

  product : Product ={
    kkdFarmId: "kkdFarmId",
    imageUrl: "imageUrl",
    productName: "productName",
    description: "red",
    price: 10,
    bulkOrderPrice: 8,
    quantity: 100,
    available: false
  }

  constructor(private productService: ProductService){
  }

  selectChangeHandler (event: any){
    this.productName=event.target.value;
  }

  onFileSelected(event){
		console.log(event);
		//this.imageUrl=String(event.target.files[0]);
		this.imageUrl="http://www.allwhitebackground.com/onion.html";
  }

  check(){
    // alert(this.productName);
    // alert(this.available);
    // alert(this.description);
    // alert(this.price);
    // alert(this.bulkPrice);
    // alert(this.quantity);
    // alert(this.imageUrl);
      
    this.product.kkdFarmId=this.kkdFarmId;
    this.product.description=this.description;
    this.product.price=this.price;
    this.product.bulkOrderPrice=this.bulkPrice;
    this.product.quantity=this.quantity;
    this.product.productName=this.productName;
    this.product.available=this.available;
    this.product.imageUrl=this.imageUrl;

    this.productService.update(this.kkdFarmId, this.product)
      .subscribe((res)=>{
        //console.log("-----------------gghvfghh--------0---");
        console.log(res);
      },(error)=>{
      });
  }
}
