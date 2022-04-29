import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup
  productRef: any

  constructor(
    public productService: ProductService,
    public formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      producto : [''],
      cantidad : [],
      stock : [],
      valor_unitario : [],
      subtotal : []
    })
  }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id')
    this.productService.getProductById(id).subscribe( res => {
      this.productRef = res
      this.editForm = this.formBuilder.group({
        producto: [this.productRef.producto],
        cantidad: [this.productRef.cantidad],
        stock: [this.productRef.stock],
        valor_unitario: [this.productRef.valor_unitario],
        subtotal: [this.productRef.subtotal],
      })
    } )
  }
  onSubmit(){
    const id = this.activeRouter.snapshot.paramMap.get('id')
    this.productService.updateProduct(this.editForm.value, id)
    this.router.navigate(['show'])
  }
  back(){
    this.router.navigate(['show'])
  }
}
