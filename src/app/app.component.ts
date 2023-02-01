import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-form';
  name!:string;
  cities = ["Sevilla", "Córdoba", "Huelva"];
  selection!:string;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Change', changes)
  // }

  ngOnInit() : void {
    console.log('OnInit')
  }

   ngOnDestroy() : void {
    console.log('OnInit')
  }

  onCityClicked(city:string):void {
    console.log('City', city);
    this.selection = city;
  }

   onClear():void {
    this.selection = "";
  }
}
