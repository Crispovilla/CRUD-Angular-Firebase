import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/product.service';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm: FormGroup;

  constructor(
    public productService: ProductService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.productForm = this.formBuilder.group({
      producto : [''],
      cantidad : [],
      stock : [],
      valor_unitario : [],
      subtotal : []

    })

   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.productService.createProduct( this.productForm.value )
    this.router.navigate(['show'])
  }
  back(){

    this.router.navigate(['show'])
  }

}
