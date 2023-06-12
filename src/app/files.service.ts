import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private httpClient: HttpClient) {}

  // findAllFiles(): Observable<File[]>{
  //   return this.httpClient.get('/documents')
  //     .pipe(
  //       map(res => res['payload'])
  //     );
  // }
}
