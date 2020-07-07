import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
  template:`<h1>Sem produtos cadastrado</h1>`
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  hasProd: boolean
  displayedColumns = ['id','name','price','action']

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    let aux = 0
    this.productService.read().subscribe(products=>{
      this.products = products
      aux = products.length
      aux>0?this.hasProd=true:this.hasProd=false
    })
  }
}
