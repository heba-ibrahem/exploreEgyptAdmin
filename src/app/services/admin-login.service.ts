import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAdmin } from 'src/app/viewmodels/iadmin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpclient:HttpClient) { }

  login(email:string, password:string) {
   return this.httpclient.get<IAdmin[]>(`${environment.API_URL}/admin/?email=${email}&&password=${password}`)
  }
  isLogged(): boolean{
    if(localStorage.getItem('AdminToken')){
      return true;
    }else{
      return false;
    }
  }
}
