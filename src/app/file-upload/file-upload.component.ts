import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FilesService } from '../files.service';

export interface UploadFile {
  file: File;
  title: string;
  description: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  uploadForm!: UntypedFormGroup;
  fileName = '';
  selectedFile: File | null = null;
  uploadError = '';

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.uploadForm = new UntypedFormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  setUploadData() {
    if (this.selectedFile) {
      this.filesService.selectedUpload = {
        file: this.selectedFile,
        title: this.uploadForm.value.title,
        description: this.uploadForm.value.description,
      };
    } else {
      this.uploadError = 'No file selected for upload.';
    }
  }
}
