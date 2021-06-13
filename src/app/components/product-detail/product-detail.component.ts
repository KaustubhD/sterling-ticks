import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/product.model';

declare var changeImage: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = 
    {
      "id": 123,
      "name": "BREITLING Navitimer",
      "price": 484710,
      "brand": "Breitling",
      "collection": "Navitimer",
      "series": "Automatic 35",
      "modelno": "U17395211A1P2",
      "movement": "Automatic",
      "gender": "Women",
      "star_rating": 4.3,
      "discount": 20,
      "case": [{"size": 35,
        "shape": "Round",
        "material": "Steel"
      }],
      "glass_material": "Sapphire Crystal",
      "dial_colour": "Mop",
      "strap": [{"material": "Leather",
        "colour": "Brown"
      }],
      "water_resistance": 30,
      "warranty_period": 2,
      "features": "Bi-directional Rotating Bezel",
      "img": ["navitimer1.webp", "navitimer2.webp", "navitimer3.webp", "navitimer4.webp"],
    
    }
  

  featureImage: string = "../../../assets/images/" + this.product.img[0]
  sellingPrice: number = this.getDiscountedPrice();

  @ViewChild("slider")slider: ElementRef  

  constructor() { }

  ngOnInit(): void {
    new changeImage();
  }

  changeImg(event: Event){
    this.featureImage = (event.currentTarget as HTMLImageElement).src;
  }

  scrollLeft(){
    console.log('Left')
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 180), behavior: 'smooth' })
  }

  scrollRight(){
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 180), behavior: 'smooth' })
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

}
