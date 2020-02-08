import {Component, Input, OnInit} from '@angular/core';
import {MenuItems} from '../app.component';
import {visibility} from '../header/header.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() menuItems: MenuItems[] = [];
  private vis: boolean;

  constructor() {
  }

  toggle() {

    this.open(true);
  }

  open(a) {
    if (a) {
      return a;
    }
    this.vis = visibility;
    return this.vis;
  }

  ngOnInit() {
  }

}
