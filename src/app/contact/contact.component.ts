import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm
{
  "name": string;
  "age": boolean;
  "department": string;
  "comment": string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  model = {
  name: "",
  age: false,
  department: "",
  comment: ""
  }
constructor() {}

ngOnInit(): void {
  console.log('El componente ha cargado');
}
onSubmit(form: NgForm): void{
  console.log('Form values', form);
}
}
