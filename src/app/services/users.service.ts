import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/viewmodels/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }
  getAllUsers() {
  return this.httpclient.get<IUser[]>(`${environment.API_URL}/Users`);
}
deleteUser(id:number) {
  return this.httpclient.delete(`${environment.API_URL}/Users/${id}`);
}
}
