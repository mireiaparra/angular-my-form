import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit{
  contactForm!: FormGroup;

constructor(private readonly fb: FormBuilder) {}

ngOnInit():void {
  this.contactForm = this.initForm();
  // this.onPathValue();
  // this.onSetValue();
}

onPathValue():void {
  this.contactForm.patchValue({name: 'Paco'});

}

onSetValue():void {
  // this.contactForm.setValue({comment: 'Hola señora'});
}

onSubmit(): void {
  console.log('Form -->', this.contactForm.value)
}

initForm(): FormGroup{
  return this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required]],
    department: [''],
    comment: ['', [Validators.required]]
  })
}
}
