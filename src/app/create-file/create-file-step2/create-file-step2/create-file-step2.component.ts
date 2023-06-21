import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-file-step2',
  templateUrl: './create-file-step2.component.html',
  styleUrls: ['./create-file-step2.component.css'],
})
export class CreateFileStep2Component implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
