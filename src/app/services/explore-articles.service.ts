import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExploreArticle } from '../viewmodels/iexplore-article';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExploreArticlesService {

  constructor(private http: HttpClient) { 
    
  }

  getArticles() :Observable<IExploreArticle[]> {
    return this.http.get<IExploreArticle[]>(`${environment.API_URL}/Articles`);
  }

  getArticleById(id: number) :Observable<IExploreArticle> {
    return this.http.get<IExploreArticle>(`${environment.API_URL}/Articles/${id}`);
  }

  addArticle(article: IExploreArticle) :Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post<any>(`${environment.API_URL}/Articles`, article, httpOptions);
  }

  deleteArticle(id: number) :Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.delete(`${environment.API_URL}/Articles/${id}`, httpOptions)
  }

  updateArticle(updatedArticle: IExploreArticle) :Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.put(`${environment.API_URL}/Articles/${updatedArticle.id}`, updatedArticle, httpOptions);
  }

}
