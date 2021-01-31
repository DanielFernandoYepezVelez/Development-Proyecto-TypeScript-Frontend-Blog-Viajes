import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testimoniales',
  templateUrl: './testimoniales.component.html',
  styleUrls: ['./testimoniales.component.css']
})
export class TestimonialesComponent implements OnInit {
  public formForma!: FormGroup;

  get nameNoValido(): boolean | undefined {
    return this.formForma.get('name')?.invalid && this.formForma.get('name')?.touched;
  }

  get emailNoValido(): boolean | undefined {
    return this.formForma.get('email')?.invalid && this.formForma.get('email')?.touched;
  }

  get messageNoValido(): boolean | undefined {
    return this.formForma.get('message')?.invalid && this.formForma.get('message')?.touched;
  }

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  private crearFormulario(): void {
    this.formForma = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3) ] ],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$') ] ],
      message: ['', [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  public guardar(): void {
    console.log(this.formForma);

    if (this.formForma.invalid) {
      return Object.values(this.formForma.controls).forEach(control => control.markAsTouched());
    }

  }

}
