import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      dataLoaded:true;

    });
  }
}
