import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage implements OnInit {

  public language : string;

  constructor() {
    document.documentElement.dir = document.documentElement.dir != ''? document.documentElement.dir : 'ltr';
    this.language = document.documentElement.dir
  }

  ngOnInit() {
  }

  changeLanguage(){
    document.documentElement.dir = document.documentElement.dir == 'ltr'? "rtl" : "ltr";
    this.language = document.documentElement.dir
  }

}
