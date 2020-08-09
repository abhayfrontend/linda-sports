import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tg-navigationm-mobile').addClass('in');
  }

}
