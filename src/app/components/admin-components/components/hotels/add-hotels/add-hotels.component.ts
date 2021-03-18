import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from '../../../../../services/hotel.service';
import { ICity } from '../../../../../viewmodels/icity';
import { IHotel } from '../../../../../viewmodels/ihotel';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.scss']
})
export class AddHotelsComponent implements OnInit {

  AddHotelForm: FormGroup;
   hotel: IHotel;
  CityList: ICity[]=[];
  CityID: ICity[] = [];
  added:boolean=false
  constructor( private fb: FormBuilder, private hotelSer: HotelService,private toastr: ToastrService,private router: Router) {
    this.AddHotelForm = this.fb.group({
    hotelName: ['',[Validators.required]],
    img:[''],
    city:['',[Validators.required]],
    roomPrice:['',[Validators.required]],
    contactInfo: ['',[Validators.required]],
    adress:['',[Validators.required]],
    cityID:['',[Validators.required]],
    })
    this.hotel={
    hotelName: '',
    img:'',
    city:'',
    roomPrice:'',
    contactInfo: '',
    adress:'',
    cityID:0

    }

   }

  ngOnInit(): void {
    this.hotelSer.getCity().subscribe(
      (response) =>{
        // console.log(this.CatagoryListApi)
      this.CityList= response;
       console.log(this.CityList)
    },
      (err) =>{console.log(err)}

    )
  }

  chooseCity(a: any) {
    this.hotelSer.getCityID(a.target.value).subscribe(
      (response) => {

        console.log(this.CityID)
        this.CityID = response;
      },
      (err) => { console.log(err) }
    )

  }

  AddHotel(){
    console.log(this.AddHotelForm.value)
    this.hotelSer.addHotel(this.AddHotelForm.value).subscribe(
      (res) => {
        console.log(res);
        this.AddHotelForm.reset();
        this.router.navigate(['/hotels/all']).then(()=>{
          this.toastr.success('The hotel has been added successfuly');});
      },
      (err) => { console.log(err),
        this.toastr.error(' There is an error') }
    );
  }

}
