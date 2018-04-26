import { Component, OnInit } from '@angular/core';
import { FarmerViewProductService } from '../../../services/farmer-view-product/farmer-view-product.service'
import { viewProductServiceUrl } from '../../../config/viewProductServiceUrl.config';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-view-product',
  templateUrl: './farmer-view-product.component.html',
  styleUrls: ['./farmer-view-product.component.css'],
  providers: [FarmerViewProductService]
})
export class FarmerViewProductComponent implements OnInit {

  constructor(private farmerViewProductService : FarmerViewProductService) { }

  public products : any = [];
  public productId : any;
  public prod : any = [];
  //public id : any;

  public getProducts() {
    this.farmerViewProductService.getAllProducts(viewProductServiceUrl.viewProductUrl).subscribe((res)=>{
      this.products=res;
    },error=>this.handleError(error))
  }

  public saveId(id : any) {
    this.productId = id;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.deleteProduct();
      }
    })
    //alert(this.productId);
  }

  public deleteProduct() {
    //alert("here****");
    this.farmerViewProductService.deleteParticularProduct(viewProductServiceUrl.deleteProductUrl+this.productId).subscribe((res)=>{
      this.ngOnInit();
    },error=>this.handleError(error))
  }

  public updateId(id : any) {
    for (var i=0; i < this.products.length; i++) {
      if (this.products[i].productId === id) {
        this.prod = this.products[i];
          console.log(this.products[i]);
         // return this.products[i];
      }
  }
  }
 
  ngOnInit() {

    this.getProducts();
  }

  private handleError(error) {
		console.log("Logging the error occured in the service");
  }
  
}
