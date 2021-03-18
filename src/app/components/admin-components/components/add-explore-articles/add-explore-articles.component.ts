import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExploreArticlesService } from 'src/app/services/explore-articles.service';

@Component({
  selector: 'app-add-explore-articles',
  templateUrl: './add-explore-articles.component.html',
  styleUrls: ['./add-explore-articles.component.scss']
})
export class AddExploreArticlesComponent implements OnInit {
  ArticleFrom = new FormGroup({
    page: new FormControl('About', Validators.required),
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    Images: new FormControl([]),
  })
  label_text: string = 'Choose File';
  images: string[] = [];
  constructor(private articlesService: ExploreArticlesService, private toastr: ToastrService) { }

  ngOnInit(): void {
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

  addArticle() {
    console.log(this.ArticleFrom.value);
    this.articlesService.addArticle(this.ArticleFrom.value).subscribe(
      (res)=> {
        console.log(res);
        // window.location.reload();
        this.toastr.success('Added successfully');
        this.ArticleFrom.reset();
        this.images = [];
      }, (err)=> {
        this.toastr.error('Something went wrong');
        console.log(err)
      } 
    )
  }

}
