import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute ,NavigationExtras, Router} from '@angular/router';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { department } from 'src/app/services/department.service';
import { ActArticlesService } from 'src/app/services/act-articles.service';
import { IDepartment } from 'src/app/viewmodels/IDepartment';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  sections: string[] = ['Keep up with the new', 'Explore top attractions']
  departments: IDepartment[] = []
  myFile: string = ''
  activitiesArticles: FormGroup;
  imgs: string[] = [];
  articleId: string | null = '';
  i: number = 1;
  contentt: string[] = [];
  constructor(public depService: department, public fb: FormBuilder, private artService: ActArticlesService, private toastr: ToastrService, public router: ActivatedRoute, private route: Router) {

    this.activitiesArticles = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      section: new FormControl('', Validators.required),
      content: new FormControl([], Validators.required),
      Images: new FormControl([]),
      dep: new FormControl(0, Validators.required),
      city: new FormControl('', Validators.required),
      contentSec: new FormControl(''),

    })
  }
  ngOnInit(): void {


    this.router.paramMap.subscribe(ParamMap => {
      this.articleId = ParamMap.get('id');
      console.log(this.articleId);
});
if(this.articleId){
  let sup = this.artService.getArticleById(Number(this.articleId)).subscribe(
    (response) => {
      this.activitiesArticles = this.fb.group({
        title: [[response.title]],
        description: [[response.description]],
        img: [[response.img]],
        section: [[response.section]],
        content: [response.content],
        Images: [response.Images],
        dep: [[response.dep]],
        city: [response.city],
      })
console.log(response.section)
    },
    (err) => { console.log(err) }
  );
}
    let sup = this.depService.getAll().subscribe(
      (response) => {
        this.departments = response;
        console.log(this.departments);
      },
      (err) => { console.log(err) }
    );
  }

  addSec() {

    var textareas = document.getElementsByTagName('textarea');
    for (let j = 0; j < textareas.length-1; j++) {
      if (!this.contentt.includes(textareas[j].value)) {
        this.contentt.push(textareas[j].value)
      }

    }
    this.activitiesArticles.patchValue({content: this.contentt })
console.log( this.activitiesArticles.get('content')?.value)
    this.contentt=[];

  }
  imagesInArray(event: any) {
    let files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.imgs.push(files[i].name);
    }
    this.activitiesArticles.get('Images')?.setValue(this.imgs);
  }
  oneImage(event: any) {
    let file: FileList = event.target.files;
    this.myFile = file[0].name
    this.activitiesArticles.get('img')?.setValue(this.myFile);
  }
add(){ if(this.articleId){

    this.artService.updateArticle(this.activitiesArticles.value,Number(this.articleId)).subscribe(
      (response) => {
console.log('now')
        console.log(response);
      }, (err) => console.log(err)
    )

  this.toastr.success('Updated successfully');
  this.route.navigate(['activitiesArticles']);
    }
else{ this.artService.addArticle(this.activitiesArticles.value).subscribe(
  (response)=> {
    console.log(response);
    this.toastr.success('Added successfully');
    this.activitiesArticles.reset();
    this.imgs = [];
  }, (err)=> {
    this.toastr.error('Something went wrong');
    console.log(err);
  },)}}
  MoreContent() {
    this.i++
    let moreContents = document.createElement('div');
    let lable = document.createElement('label');
    lable.className = 'col-3';
    lable.htmlFor = 'aContent' + this.i
    lable.innerText = "content sec:"
    moreContents.innerHTML = `<div class="form-group form-row">
<lable for="aContent${this.i}" class='col-3' style="text-align: right;font-size: 2vw;">content sec:</lable>
    <textarea id="aContent${this.i}" rows="3" style="overflow-y: scroll;" class="form-control col-7 m-1 sec "formControlName="contentSec${this.i}" ></textarea>
</div>`;
    document.querySelector('.showInputField')?.appendChild(moreContents);
  }
}


