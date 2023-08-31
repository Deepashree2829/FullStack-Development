import { Component } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Products[] = [
    { id: "123" , name: "Mobile", price: "dbk2829@gmail.com", model: 2019},
    { id: "234" , name: "Bike", price: "dbk2829@gmail.com", model: 2018},
    { id: "567" , name: "Car", price: "dbk2829@gmail.com", model: 2020}
  ];
  ngOnInit() {

  }
}
