import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-hess',
  templateUrl: './forms-hess.component.html',
  styleUrls: ['./forms-hess.component.css']
})
export class FormsHessComponent implements OnInit {
  tareaForms: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tareaForms=this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      artista: ['', [Validators.maxLength(35), Validators.required]],
      cancion:['', [Validators.minLength(2), Validators.required]],
      momento:['', Validators.maxLength(100)]
    })
  }

  submit() {
    alert('Gracias por compartirnos tu momento! Lo estaremos comentando en la radio :).')
  }

}
