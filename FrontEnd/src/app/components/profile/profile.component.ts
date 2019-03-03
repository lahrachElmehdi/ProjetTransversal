import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  show: boolean = false;

  constructor() { }
  ngOnInit() {
  
  }

  showForm(e){
    e.preventDefault();
    this.show = true;
  }

  



}
