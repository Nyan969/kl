import {Component, OnInit} from '@angular/core';

let  visibility = false;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  logoImage: any = require('../../images/logo.png');
   // переключаем переменную
  toggle() {
    visibility = !visibility;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

export {visibility};
