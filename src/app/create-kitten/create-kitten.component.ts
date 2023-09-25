import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
import { ListKittenComponent } from '../list-kitten/list-kitten.component';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {

  kittenForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]*$/)]],
    breed: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-z\s]*$/)]],
    birth: ['', Validators.required],
    photo: ['', [Validators.required, Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)]]
  })

  constructor(private fb: FormBuilder) { }

  @Output()
  newKitten: EventEmitter<Object> = new EventEmitter();

  addKitten(): void {
    this.newKitten.emit(this.kittenForm.value);
  }
}
