import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IDepartment} from '../viewmodels/IDepartment';
@Injectable({
  providedIn: 'root'
})
export class department {

  constructor(private http: HttpClient) { }
  getAll(): Observable <IDepartment[]>
  {
    return this.http.get<IDepartment[]>(`${environment.API_URL}/explorDep`);
  }
}
