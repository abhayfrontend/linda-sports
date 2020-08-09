import { Component, OnInit } from '@angular/core';
import {MailerService} from '../mailer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
params:any={
  name:'',
  emailid:'',
  message:'',
  subject:''
}
  constructor(private sendMail:MailerService) { }

  ngOnInit() {
  }
sendInfo(){
  this.sendMail.sendMail(this.params).subscribe(res=>{},err=>{});
}
}
