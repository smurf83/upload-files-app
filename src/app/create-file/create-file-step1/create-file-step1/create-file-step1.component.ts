import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-file-step1',
  templateUrl: './create-file-step1.component.html',
  styleUrls: ['./create-file-step1.component.css'],
})
export class CreateFileStep1Component implements OnInit {
  form = this.fb.group({
    selectedOption: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
