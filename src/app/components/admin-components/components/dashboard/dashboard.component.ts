import { Component, OnInit } from '@angular/core';
import {faHeart, faNewspaper, faSuitcaseRolling, faUsers } from '@fortawesome/free-solid-svg-icons';
import { DashBoardService } from 'src/app/services/dash-board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faUsers=faUsers;
  faNewspaper= faNewspaper;
  faHeart = faHeart;
faSuitcaseRolling=faSuitcaseRolling;
  UsersLenght:number=0;
  LiksLenght:number=0;
  ArticalsLenght:number=0;
  TripsLenght:number=0;
  constructor(private dashboard:DashBoardService) { }

  ngOnInit(): void {
  this.dashboard.getUsers().subscribe(
      (response)=>{
        this.UsersLenght=response.length;
      },
      (err)=>{console.log(err)}
    ); 
    this.dashboard.getArtical().subscribe(
      (response)=>{
        this.ArticalsLenght=response.length;
      },
      (err)=>{console.log(err)}
    );
    this.dashboard.getLikes().subscribe(
      (response)=>{
        this.LiksLenght=response.length;
      },
      (err)=>{console.log(err)}
    );
    this.dashboard.getTrips().subscribe(
      (response)=>{
        this.TripsLenght=response.length;
      },
      (err)=>{console.log(err)}
    );
  }

}
