import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
  <ul class="list-group">
  <li class="list-group-item mt-1" (click)="onCitySelected(city)" [ngClass]="{'active': city === selection}">
  {{city}}
  <button type="button" class="btn btn-danger float-end" (click)="onCityDelete(city)">Delete</button></li>
</ul>`,
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
@Input() city!: string;
@Input() selection!: string;
@Output() citySelectedEvent = new EventEmitter<string>();
@Output() cityDeleteEvent = new EventEmitter<string>();

onCitySelected(id: string): void{
  this.cityDeleteEvent.emit(id);
}

onCityDelete(id: string): void{
  this.cityDeleteEvent.emit(id);
}

}



// <li *ngFor="let city of cities" (click)="onCityClicked(city)" [ngClass]="{'alert alert-info': city === selection}">{{city}}</li>