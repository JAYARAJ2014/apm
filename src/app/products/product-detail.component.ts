import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle = 'Product Detail';
  errorMessage: string;
  imageWidth = 100;
  imageMargin = 2;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsById(id).subscribe({
      next: data => {
        this.product = data;
        this.pageTitle += ` : ${this.product.productName}`;
      },
      error: err => (this.errorMessage = err)
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
