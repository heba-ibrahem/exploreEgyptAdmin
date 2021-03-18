import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICity } from '../viewmodels/icity';
import { Itrain } from '../viewmodels/itrain';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private httpclient: HttpClient) { }

  getCity(): Observable<ICity[]> {
    return this.httpclient.get<ICity[]>(`${environment.API_URL}/city`);
  }
  addtrain(train: Itrain): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient.post<any>(`${environment.API_URL}/trains`, train, httpOptions);
  }
  getTrains(): Observable<Itrain[]> {
    return this.httpclient.get<Itrain[]>(`${environment.API_URL}/trains`);
  }
  getTrainsByID(id:number): Observable<Itrain[]> {
 
    return this.httpclient.get<Itrain[]>(`${environment.API_URL}/trains/${id}`);
  }

  update(id:number, train:Itrain) {
    return this.httpclient.put(`${environment.API_URL}/trains/${id}`, train);
  }


  deleteTrain(id:any) : Observable<any[]> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.delete<any>(`${environment.API_URL}/trains/${id}`, httpOptions);
  }
}
