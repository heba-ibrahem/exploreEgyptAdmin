  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service';
import { IHotel } from 'src/app/viewmodels/ihotel';


@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.scss']
})
export class ShowHotelsComponent implements OnInit {

  //HotelList: IHotel|null=null;
  hotel: IHotel| null = null;
    HotelList: IHotel[]=[];
    deleted:boolean=false
  constructor(private activatedRout: ActivatedRoute,private hotelSer: HotelService, private route: Router,private toastr: ToastrService) {

   }

  ngOnInit(): void {
    console.log('hotels')
   this.hotelSer.getHotels().subscribe(
      (response) => {
        console.log(response)
        this.HotelList = response;
      },
      (err) => { console.log(err) }
    );


  }

  deletehotel(id:any) {
    console.log("delet")
    // if(confirm("Are you want to delete")){
      this.hotelSer.deletehotel(id).subscribe(
        (res) => {
              console.log(res);
              // this.route.navigate(['/hotels/all']);
              window.location.reload()
              this.toastr.success(' The hotels has been deleted successfuly')

            },
           
            (err) => { console.log(err),
              this.toastr.error(' There is an error') }

      )
    // }
  }



}
