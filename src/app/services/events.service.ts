import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvents } from '../viewmodels/ievents';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  getAllEvents(): Observable <IEvents[]>
    {
      return this.http.get<IEvents[]>(`${environment.API_URL}/weekevents`);
    }

    addEvent(event:any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.post<any>(`${environment.API_URL}/weekevents`, event, httpOptions);
    }
    
    delete(id: number) :Observable<any> {
      const httpOptions = {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
      return this.http.delete(`${environment.API_URL}/weekevents/${id}`, httpOptions)
    }

    getEventById(id: number) :Observable<IEvents> {
      return this.http.get<IEvents>(`${environment.API_URL}/weekevents/${id}`);
    }

    updateArticle(list:any,id:number) :Observable<any> {
      const httpOptions = {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
      return this.http.put(`${environment.API_URL}/weekevents/${id}`,list, httpOptions);
    }
}
