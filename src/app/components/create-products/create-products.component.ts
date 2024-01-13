import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value)
  }
}
