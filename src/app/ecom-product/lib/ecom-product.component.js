var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var EcomProductComponent = (function () {
    function EcomProductComponent() {
        this.data = new Product();
    }
    return EcomProductComponent;
}());
EcomProductComponent = __decorate([
    Component({
        selector: 'ecom-product',
        templateUrl: './ecom-product.component.html',
        styleUrls: ['./ecom-product.component.css']
    }),
    __metadata("design:paramtypes", [])
], EcomProductComponent);
export { EcomProductComponent };
var Product = (function () {
    function Product() {
        this.id = "ID11";
        this.name = "Samsung Galaxy S8";
        this.price = 12.50;
        this.image = "assets/images/samsung_galaxy_s8.png";
        this.description = "64 GB Midnight Black";
    }
    return Product;
}());
export { Product };
//# sourceMappingURL=ecom-product.component.js.map