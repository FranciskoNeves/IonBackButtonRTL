import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage implements OnInit {

  public language : string = '';

  constructor() { }

  ngOnInit() {
    this.language = document.documentElement.dir
  }

  changeLanguage(){
    document.documentElement.dir === 'ltr'? document.documentElement.dir = "rtl" : document.documentElement.dir = "ltr";
  }

}
