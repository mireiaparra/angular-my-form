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
}
