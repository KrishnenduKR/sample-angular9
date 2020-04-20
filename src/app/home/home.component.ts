import { Component,ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  current_time = new Date();
  today;
  constructor() { 
    console.log("home...")
  }

  ngOnInit(): void {
    // let dateFormat = require('dateformat');
    // let now = new Date();
    // this.current_time = dateFormat(now, "mediumTime");
    // this.today =  dateFormat(now, "mediumDate");
    setInterval(() => {
      this.current_time = new Date();
   }, 1000);
  }

}
