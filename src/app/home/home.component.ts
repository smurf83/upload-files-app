import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photoFiles$!: Observable<File[]>;

  documentFiles$!: Observable<File[]>;

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    const files$ = [];
  }
}
