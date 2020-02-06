import {Component, OnInit} from '@angular/core';

let  visibility = true;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
