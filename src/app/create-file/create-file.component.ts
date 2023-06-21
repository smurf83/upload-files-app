import { Component } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.css'],
})
export class CreateFileComponent {
  uploadError = '';

  constructor(private filesService: FilesService) {}

  onSubmit() {
    const upload = this.filesService.selectedUpload;
    //debugger;
    if (upload) {
      this.filesService
        .createFile(upload.file, upload.title, upload.description)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.uploadError = '';
            this.filesService.selectedUpload = null;
          },
          error: (err) => {
            this.uploadError = err.error.message;
          },
        });
    }
  }
}
