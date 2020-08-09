import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
declare var $:any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $('#tg-navigationm-mobile').addClass('in');
  }
route(){
this.router.navigate(['/ss'])
}
}
