import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public products = [
    {
      name: "Onion",
      city: "Gurgaon",
      price: 10,
      avgRating: 4.0,
      quantity: 10,
      distance: 10
    },
    {
      name: "Onion",
      city: "Noida",
      price: 15,
      avgRating: 4.8,
      quantity: 12,
      distance: 6
    },
    {
      name: "Onion",
      city: "Noida",
      price: 4,
      avgRating: 4.6,
      quantity: 19,
      distance: 2
    },
    {
      name: "Onion",
      city: "Gurgaon",
      price: 67,
      avgRating: 4.1,
      quantity: 3,
      distance: 22
    },
    {
      name: "Onion",
      city: "Delhi",
      price: 130,
      avgRating: 4.2,
      quantity: 6,
      distance: 20
    },
    {
      name: "Onion",
      city: "Delhi",
      price: 188,
      avgRating: 4.3,
      quantity: 15,
      distance: 14
    },
    {
      name: "Onion",
      city: "Delhi",
      price: 14,
      avgRating: 4.5,
      quantity: 8,
      distance: 12
    }
  ];

  sorters = {
    byPrice: function(firstProduct, secondProduct) {
      return firstProduct.price - secondProduct.price;
    },
    byQuantity: function(firstProduct, secondProduct) {
      return firstProduct.quantity - secondProduct.quantity;
    },
    byDistance: function(firstProduct, secondProduct) {
      return firstProduct.distance - secondProduct.distance;
    },
    byPopularity: function(firstProduct, secondProduct) {
      // in reverse order by default
      return secondProduct.avgRating - firstProduct.avgRating;
    }
  };

  sortBy(x) {
    switch (x) {
      case "priceLH":
        this.products.sort(this.sorters.byPrice);
        break;

      case "priceHL":
        this.products.sort(this.sorters.byPrice);
        this.products.reverse();
        break;

      case "quantityLH":
        this.products.sort(this.sorters.byQuantity);
        break;

      case "quantityHL":
        this.products.sort(this.sorters.byQuantity);
        this.products.reverse();
        break;

      case "distance":
        this.products.sort(this.sorters.byDistance);
        break;

      case "popularity":
        this.products.sort(this.sorters.byPopularity);
        this.products.reverse();
        break;
    }
  }

}
