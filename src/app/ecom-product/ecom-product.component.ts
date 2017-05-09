import {Component} from '@angular/core'

@Component({
  selector:'ecom-product',
  templateUrl : './ecom-product.component.html',
  styleUrls : ['./ecom-product.component.css']
})
export class EcomProductComponent{
  data:Product;

  constructor(){
    this.data = new Product()
  }

}

export class Product{
  id:string = "ID11"
  name:string = "Samsung Galaxy S8"
  price:number = 12.50
  image:string = "assets/images/samsung_galaxy_s8.png"
  description:string = "64 GB Midnight Black"
}
