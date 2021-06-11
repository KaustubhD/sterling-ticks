import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'sterling-ticks';
	baseUrl: string = 'http://localhost:8085/sterling-ticks/';
}
