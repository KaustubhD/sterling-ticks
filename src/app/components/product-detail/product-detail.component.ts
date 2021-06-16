import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/components/models/product.model';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	product: Product = Product.build({
		"id": 123,
		"name": "BREITLING Navitimer",
		"price": 484710,
		"brand": "Breitling",
		"collection": "Navitimer",
		"series": "Automatic 35",
		"modelNo": "U17395211A1P2",
		"movement": "Automatic",
		"gender": "Women",
		"starRating": 4.3,
		"discount": 20,
		"caseSize": 35,
		"caseShape": "Round",
		"caseMaterial": "Steel",
		"glassMaterial": "Sapphire Crystal",
		"dialColour": "Mop",
		"strapMaterial": "Leather",
		"strapColour": "Brown",
		"waterResistance": 30,
		"warrantyPeriod": 2,
		"features": "Bi-directional Rotating Bezel",
		"img": ["navitimer1.webp", "navitimer2.webp", "navitimer3.webp", "navitimer4.webp"]
	})

	similarProducts: Product[] = (new Array(4)).fill(this.product)
	featureImage: String = "../../../assets/images/" + this.product.img[0]
	modelNo: String

	@ViewChild("slider") slider: ElementRef

	constructor(private aRoute: ActivatedRoute, private productService: ProductService) {
		this.modelNo = aRoute.snapshot.paramMap.get('model') as String
		// this.productService.getByModel(this.modelNo).then(product => {
		// 	this.product = product
		// })
	}

	ngOnInit(): void { }

	changeImg(event: Event) {
		this.featureImage = (event.currentTarget as HTMLImageElement).src;
	}

	scrollLeft() {
		this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 180), behavior: 'smooth' })
	}

	scrollRight() {
		this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 180), behavior: 'smooth' })
	}
}
