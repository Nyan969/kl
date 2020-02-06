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

  @Input()
  get vis() {
    return visibility;
  }

  constructor() {
  }

  close() {
  }

  ngOnInit() {
  }

}
