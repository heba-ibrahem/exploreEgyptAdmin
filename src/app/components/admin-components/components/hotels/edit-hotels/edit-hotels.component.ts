import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service';
import { ICity } from '../../../../../viewmodels/icity';
import { IHotel } from '../../../../../viewmodels/ihotel';

@Component({
  selector: 'app-edit-hotels',
  templateUrl: './edit-hotels.component.html',
  styleUrls: ['./edit-hotels.component.scss']
})
export class EditHotelsComponent implements OnInit {

  AddHotelForm!: FormGroup;
  id!: number;
  hotel: IHotel;
  CityList: ICity[] = [];
  CityID: ICity[] = [];
  added: boolean = false;
  constructor(private fb: FormBuilder, private hotelSer: HotelService, private router: Router, private route: ActivatedRoute,private toastr: ToastrService) {
    this.AddHotelForm = this.fb.group({
      id: [''],
      hotelName: ['', [Validators.required]],
      img:[''],
      city: ['', [Validators.required]],
      roomPrice: ['', [Validators.required]],
      contactInfo: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      cityID: ['', [Validators.required]],
    })
    this.hotel = {
      id:this.id,
      hotelName: this.AddHotelForm.value.hotelName,
      img:'',
      city: this.AddHotelForm.value.city,
      roomPrice: this.AddHotelForm.value.roomPrice,
      contactInfo: this.AddHotelForm.value.contactInfo,
      adress: this.AddHotelForm.value.adress,
      cityID: this.AddHotelForm.value.cityID,

    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hotelSer.getCity().subscribe(
      (response) => {
        this.CityList = response;
        console.log("cityList", this.CityList)
      },
      (err) => { console.log(err) }

    )
    this.hotelSer.getHotelByID(this.id).subscribe(
      (response) => {
        this.AddHotelForm.patchValue(response)
        // console.log(response)
      }
    )


  }
  chooseCity(a: any) {
    // console.log(a.target.value);
    this.hotelSer.getCityID(a.target.value).subscribe(
      (response) => {
        console.log(this.CityID)
        this.CityID = response;
      },
      (err) => { console.log(err) }
    )
  }
  editHotel() {
    console.log(this.AddHotelForm.value)
    this.hotelSer.update(this.id, this.AddHotelForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/hotels/all']).then(()=>{
          this.toastr.success(' The train has been updated successfuly');});
      },
      (err) => { console.log(err),
        this.toastr.error(' There is an error') }
    );
  }

}
