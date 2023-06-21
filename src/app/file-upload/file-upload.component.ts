import { Component } from '@angular/core';
import { FilesService } from '../files.service';

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      this.filesService
        .createFile(this.selectedFile, this.title, this.description)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.fileName = '';
            this.title = '';
            this.description = '';
            this.uploadError = '';
            this.selectedFile = null;
          },
          error: (err) => {
            this.uploadError = err.error.message;
          },
        });
    }
  }
}
