import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-form';
  name!:string;
  cities = ["Sevilla", "Córdoba", "Huelva"];
  selection!:string;

addNewCity(city: string): void {
  this.cities.push(city);
}

  onCityClicked(city:string):void {
    this.selection = city;
  }

   onClear():void {
    this.selection = "";
  }
}
