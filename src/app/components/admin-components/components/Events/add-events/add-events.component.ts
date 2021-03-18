import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { IEvents } from 'src/app/viewmodels/ievents';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit {
  image: string = ''
  List: FormGroup;
  event:IEvents|null=null;
  isAdded:boolean=false;
  articleId:string | null=''
  label_text: string = 'Choose Image';
  constructor( private fb: FormBuilder , private evevtService:EventsService) {
    this.List = this.fb.group({
      date: ['', Validators.required],
      image: ['', Validators.required],
      title: ['', [Validators.required,Validators.minLength(5)]],
      description: ['', [Validators.required,Validators.minLength(10)]],
      seconddescription: ['', [Validators.required,Validators.minLength(20)]],
    })
   }

  ngOnInit(): void {

  }
  loadImage(event: any) {
    let file: FileList = event.target.files;
    this.image = file[0].name;
    this.label_text = file[0].name;

    if (this.image == "") {
      this.label_text = 'Choose File';
    }
    this.List.get('image')?.setValue(this.image);
  }

  addEvent(){
    var event = {
      date:this.List.value.date,
      img: "../assets/"+this.List.value.image,
      title:this.List.value.title,
      description: this.List.value.description,
      seconddescription: this.List.value.seconddescription}
      console.log(event);
    this.evevtService.addEvent(event).subscribe(
      (res)=> {
        this.isAdded = true;
        this.List.reset();
        this.label_text = 'Choose Image';
      },(err)=> {
        console.log(err)
      } 
    )
   
   
  }

}
