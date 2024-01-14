import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {FocusDirective} from "../../directives/focus.directive";
import {ProductsServices} from "../../services/products.services";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FocusDirective],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent implements OnInit {

  constructor(
    private productService: ProductsServices,
    private modalService: ModalService
    ) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  ngOnInit() {
  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
