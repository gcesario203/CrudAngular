import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {Router} from "@angular/router";
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product={
    name:'Teste dos cria',
    price: 124.29
  }

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
   
  }

  createProduct():void{

    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto cadastrado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct():void{
    this.router.navigate(['/products'])
  }

}