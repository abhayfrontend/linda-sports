import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tg-navigationm-mobile').addClass('in');
  }

}
