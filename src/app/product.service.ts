import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'


import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private angularFirestore: AngularFirestore ) { }

  getProducts(){
    return this.angularFirestore
      .collection('products')
      .snapshotChanges()

  };

  getProductById(id){
    return this.angularFirestore
      .collection('products')
      .doc(id)
      .valueChanges()

  };

  createProduct( product: Product ){
    return new Promise<any> ( ( resolve, reject ) => {
      this.angularFirestore
        .collection("products")
        .add(product)
        .then( ( response ) => {
          console.log(response)
        },
        (error) => {
          reject(error)
        })
    })

  };

  updateProduct( product: Product, id ){
    return this.angularFirestore
      .collection('products')
      .doc(id)
      .update({
        producto: product.producto,
        cantidad: product.cantidad,
        stock: product.stock,
        valor_unitario: product.valor_unitario,
        subtotal: product.subtotal,
      })

  };



  deleteProduct( product ){
    return this.angularFirestore
      .collection('products')
      .doc(product.id)
      .delete()

  };

}
