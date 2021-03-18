import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignLeft, faBell, faComment, faDoorOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faDoorOpen =faDoorOpen ;
  faAlignLeft=faAlignLeft;
  faBell= faBell;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    if(confirm("Are you sure you want to log out !! ")){
      console.log("logout")
      localStorage.removeItem('AdminToken');
      this.router.navigateByUrl('/login');
      
    }
  }

}
