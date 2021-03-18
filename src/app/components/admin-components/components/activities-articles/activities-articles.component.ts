import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Article } from 'src/app/viewmodels/IactArticle';
import { ActArticlesService } from 'src/app/services/act-articles.service';

@Component({
  selector: 'app-activities-articles',
  templateUrl: './activities-articles.component.html',
  styleUrls: ['./activities-articles.component.scss']
})
export class ActivitiesArticlesComponent implements OnInit {
  ArticleList:Article[]=[]

  constructor(    @Inject(DOCUMENT) private _document: Document,
  private router: Router,public ArticleService: ActArticlesService,
  ) { }

  ngOnInit(): void {

    let sup3= this.ArticleService.getAll().subscribe(
      (response) => {
        this.ArticleList = response;
        console.log(this.ArticleList[0]);
      },
      (err) => { console.log(err) }
    );
  }
  delete(id: number) {
    if(confirm("Are you sure?")){

    this.ArticleService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this._document.defaultView?.location.reload();

      }, (err) => {
        console.log(err);
      }
    )}

}

  }



