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



  onCityClicked(city:string):void {
    console.log('City', city);
    this.selection = city;
  }

   onClear():void {
    this.selection = "";
  }
}
