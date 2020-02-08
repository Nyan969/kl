import {Component, OnInit} from '@angular/core';

let visibility = false;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  logoImage: any = require('../../images/logo.png');

  // переключаем переменную

  constructor() {
  }

  tog() {
    toggle();
  }

  ngOnInit() {
  }

}

function toggle() {
  visibility = !visibility;
}

export {toggle, visibility};
