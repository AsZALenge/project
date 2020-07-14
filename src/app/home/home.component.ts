import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proJect = 'AsZALenge';
  nameTh1 = 'Ch';
  nameTh2 = 'Ch';
  constructor() { }

  ngOnInit() {
  }
}
