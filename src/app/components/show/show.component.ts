import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Products: Product[]

  constructor( private productService: ProductService ) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe( ( res ) => {
      this.Products = res.map( (e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Product)
        }
      })
    } )

  }
  deleteRow = (product) => this.productService.deleteProduct(product);

}
