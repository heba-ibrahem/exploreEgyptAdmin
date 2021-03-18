import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../viewmodels/IactArticle';

@Injectable({
  providedIn: 'root'
})


export class ActArticlesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <Article[]>
    {
      return this.http.get<Article[]>(`${environment.API_URL}/ActivitiesArticles`);
    }
    addArticle(Article: Article): Observable<any[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
          //,'Accept':' */*'
          //,'Authorization': 'my-auth-token'
        })
      };

      return this.http.post<any>(`${environment.API_URL}/ActivitiesArticles`, Article, httpOptions);
    }
    delete(id: number) :Observable<any> {
      const httpOptions = {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
      return this.http.delete(`${environment.API_URL}/ActivitiesArticles/${id}`, httpOptions)
    }
    getArticleById(id: number) :Observable<Article> {
      return this.http.get<Article>(`${environment.API_URL}/ActivitiesArticles/${id}`);
    }
    updateArticle(updatedArticle: Article, id:number) :Observable<any> {
      const httpOptions = {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
      return this.http.put(`${environment.API_URL}/ActivitiesArticles/${id}`, updatedArticle, httpOptions);
    }
  }

