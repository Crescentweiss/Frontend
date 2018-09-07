import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USER } from './mock-user';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  user: User = USER;
  constructor() { }

  ngOnInit() {
  }

}