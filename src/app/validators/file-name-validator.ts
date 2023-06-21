import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FilesService } from '../files.service';

export function fileNameValidator(
  filesService: FilesService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const fileName = control.value;

    // Check if the file name exists in the database using the filesService
    return filesService.findAllFiles().pipe(
      map((files) => {
        const lowerCaseFileName = fileName.toLowerCase();
        const fileExists = files.some(
          (file) => file.name.toLowerCase() === lowerCaseFileName
        );
        return fileExists ? { fileExists: true } : null;
      }),
      catchError(() => of(null)) // Return null if an error occurs
    );
  };
}
