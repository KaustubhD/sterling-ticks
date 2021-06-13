import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  @Input() rating: number;
  constructor() { }
  ngOnInit() {
  }
  fetchRating(star: number) {
    //method not implemented.
    //this.rating = star;
  }
}
