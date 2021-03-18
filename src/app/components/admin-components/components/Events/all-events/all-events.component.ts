import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { IEvents } from 'src/app/viewmodels/ievents';


@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  List:IEvents[]=[]
  image: string = ''
  EventList: FormGroup;
  isAdded:boolean=false;
  label_text: string = 'Choose Image';
  constructor( @Inject(DOCUMENT) private _document: Document,
  private router: Router,public EventService: EventsService,private fb: FormBuilder ,) {
    this.EventList = this.fb.group({
      date: ['', Validators.required],
      image: ['', Validators.required],
      title: ['', [Validators.required,Validators.minLength(5)]],
      description: ['', [Validators.required,Validators.minLength(10)]],
      seconddescription: ['', [Validators.required,Validators.minLength(20)]],
    })
   }
  
  ngOnInit(): void {
   
   this.EventService.getAllEvents().subscribe(
      (response) => {
        this.List = response;
      },
      (err) => { console.log(err) }
    );
  }
  delete(id: any) {
    if(confirm("Are you sure?")){
    this.EventService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this._document.defaultView?.location.reload();
      }, (err) => {
        console.log(err);
      }
    )}
}
loadImage(event: any) {
  let file: FileList = event.target.files;
  this.image = file[0].name;
  this.label_text = file[0].name;

  if (this.image == "") {
    this.label_text = 'Choose Image';
  }
  this.EventList.get('image')?.setValue(this.image);
}

setFormForUpdate(id:any) {
  this.EventService.getEventById(id).subscribe(
    (res) => {
      console.log(res);
      this.EventList = this.fb.group({
        date: [res.date, Validators.required],
        image: [res.img, Validators.required],
        title: [res.title, [Validators.required,Validators.minLength(5)]],
        description: [res.description, [Validators.required,Validators.minLength(10)]],
        seconddescription: [res.seconddescription, [Validators.required,Validators.minLength(20)]],
      })
      this.label_text = res.img;
    },(err) => console.log(err)  
  )
}
update(id:any){
  this.EventService.updateArticle(this.EventList.value,id).subscribe(
    (res) => {
      console.log(res);
      window.location.reload();
    }, (err) => {
      console.log(err);
    }
  )
}

  }






