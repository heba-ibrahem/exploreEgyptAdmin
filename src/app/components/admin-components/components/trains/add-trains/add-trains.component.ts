import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrainService } from 'src/app/services/train.service';
import { ICity } from '../../../../../viewmodels/icity';
import { Itrain } from '../../../../../viewmodels/itrain';

@Component({
  selector: 'app-add-trains',
  templateUrl: './add-trains.component.html',
  styleUrls: ['./add-trains.component.scss']
})
export class AddTrainsComponent implements OnInit {

  AddTrainForm: FormGroup;
   train: Itrain;
  CityList: ICity[]=[];
  constructor(private fb: FormBuilder,private router: Router, private trainSer: TrainService,private toastr: ToastrService) {
    this.AddTrainForm = this.fb.group({
      trainNumber: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(3)]],
      city:['',[Validators.required]],
      cityID:['',[Validators.required]],
      ticketPrice:['',[Validators.required]],
      destination: ['',[Validators.required]],
      destinationId: ['',[Validators.required]],
      departureTime:['',[Validators.required]],
      arrivalTime:['',[Validators.required]],
      details:['',[Validators.required]],
      })
      this.train={
        trainNumber:0,
        city:'',
        ticketPrice:'',
        destination: '',
        departureTime:'',
        arrivalTime:'',
        details:'',
      }
   }

  ngOnInit(): void {
    this.trainSer.getCity().subscribe(
      (response) =>{
        // console.log(this.CatagoryListApi)
      this.CityList= response;
       console.log(this.CityList)
    },
      (err) =>{console.log(err)}

    )
  }
  AddTrain(){
    console.log(this.AddTrainForm.value)
    this.trainSer.addtrain(this.AddTrainForm.value).subscribe(
      (res) => {
        console.log(res);
        this.AddTrainForm.reset();
        this.router.navigate(['/trains/all']).then(()=>{
          this.toastr.success('The train has been added successfuly');});
      },
      (err) => { console.log(err),
        this.toastr.error(' There is an error') }
    );
  }

}
