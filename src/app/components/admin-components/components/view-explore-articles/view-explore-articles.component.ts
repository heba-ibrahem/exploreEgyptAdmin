import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExploreArticlesService } from 'src/app/services/explore-articles.service';
import { IExploreArticle } from 'src/app/viewmodels/iexplore-article';

@Component({
  selector: 'app-view-explore-articles',
  templateUrl: './view-explore-articles.component.html',
  styleUrls: ['./view-explore-articles.component.scss']
})
export class ViewExploreArticlesComponent implements OnInit {
  exploreArticles: IExploreArticle[] = [];
  // currentArticle: IExploreArticle = {id: 0, page: '', name: '', title: '', description: '', Images: []};
  ArticleFrom = new FormGroup({
    id: new FormControl(0),
    page: new FormControl('About', Validators.required),
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    Images: new FormControl([]),
  })
  images: string[] = [];
  label_text: string = 'Choose File';
  constructor(private articlesService: ExploreArticlesService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getExploreArticles();
  }

  getExploreArticles() {
    this.articlesService.getArticles().subscribe(
      (res) => {
        res.forEach((el) => {
          if (el.page === 'About' || el.page === 'Culture') {
            this.exploreArticles.push(el)
          }
        })
        // this.exploreArticle = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteArticle(id: number) {
    let sure: boolean = confirm("Are you sure you want to delete this article?");
    if (sure) {
      this.articlesService.deleteArticle(id).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Article deleted successfully!');
          // test refresh solution
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['viewExploreArticles']);
          }); 
        }, (err) => {
          console.log(err);
          this.toastr.error('Something went wrong!');
        }
      )
    }
  }

  setFormForUpdate(id: number) {
    this.articlesService.getArticleById(id).subscribe(
      (res) => {
        this.ArticleFrom.setValue(res);
        // this.currentArticle = res;
      }, (err) => console.log(err)  
    )
  }

  updateArticle() {
    const updatedArticle: IExploreArticle = this.ArticleFrom.value;
    this.articlesService.updateArticle(updatedArticle).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Article Updated Successfully!');
        window.location.reload();
        // this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        //   this.router.navigate(['viewExploreArticles']);
        // });
      }, (err) => {
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    )
  }

  getImages(e: any) {
    let files: FileList = e.target.files;
    // let images: string[] = [];

    for (let i = 0; i < files.length; i++) {
      this.images.push(files[i].name);
    }
    if (this.images.length > 0) {
      this.label_text = this.images.join(', ');
    } else {
      this.label_text = 'Choose File';
    }
    this.ArticleFrom.get('Images')?.setValue(this.images);
  }







}
