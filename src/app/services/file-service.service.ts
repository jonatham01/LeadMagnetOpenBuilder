import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileRta } from '../models/fileRTA.model';
import { map, tap } from 'rxjs';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  private apiUrl = `http://localhost:3000/upload`;

  constructor(
    private http:HttpClient,
  ) { }

   getFile(name: string, url: string, type: string) {
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('myFile', file);

    return this.http.post<FileRta>(`${this.apiUrl}`, dto);
  }
  
}
