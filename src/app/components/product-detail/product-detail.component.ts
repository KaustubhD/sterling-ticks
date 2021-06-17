import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/components/models/product.model';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	product: Product
	similarProducts: Product[]
	featureImage: string
	modelNo: string

	@ViewChild("slider") slider: ElementRef

	constructor(private router: Router, private aRoute: ActivatedRoute, private productService: ProductService) {
		this.init()
	}

	ngOnInit(): void {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	changeImg(event: Event) {
		this.featureImage = (event.currentTarget as HTMLImageElement).src;
	}

	scrollLeft() {
		this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 180), behavior: 'smooth' })
	}

	scrollRight() {
		this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 180), behavior: 'smooth' })
	}

	init(): void {
		this.modelNo = this.aRoute.snapshot.paramMap.get('model') as string
		this.productService.getByModel(this.modelNo).then((product: Product) => {
			this.product = Product.build(product)
			this.featureImage = product.images[0]
		})
		this.productService.getSimilarProducts(this.modelNo).then((products: Product[]) => {
			this.similarProducts = products
		})
	}
}
