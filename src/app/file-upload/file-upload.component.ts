import { Component } from '@angular/core';
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
export class FileUploadComponent {
  fileName = '';
  title = '';
  description = '';
  uploadError = '';
  selectedFile: File | null = null;

  constructor(private filesService: FilesService) {}

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
        title: this.title,
        description: this.description,
      };
    } else {
      this.uploadError = 'No file selected for upload.';
    }
  }
}
