import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../viewmodels/IactArticle';
import { IUser } from '../viewmodels/iuser';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http: HttpClient) { }
  getArtical(): Observable <Article[]>
  {
    return this.http.get<Article[]>(`${environment.API_URL}/Articles`);
  }
  getUsers(): Observable <IUser[]>
  {
    return this.http.get<IUser[]>(`${environment.API_URL}/Users`);
  }
  getLikes(): Observable <IUser[]>
  {
    return this.http.get<IUser[]>(`${environment.API_URL}/wishlist`);
  }
  getTrips()
  {
    return this.http.get<any[]>(`${environment.API_URL}/programs`);
  }
}
