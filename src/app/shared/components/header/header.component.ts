import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter();
  constructor( private auth : AuthService , private route : Router) { }

  ngOnInit(): void {

  }
  toggleSideBar()
  {
     this.toggleSideBarForMe.emit();
  }

  logOut(){
    this.auth.logOut();
    return this.route.navigate(['login']);
  }
}
