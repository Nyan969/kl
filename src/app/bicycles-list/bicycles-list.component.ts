import {Component, Input, OnInit} from '@angular/core';
import {Bikes} from '../app.component';

@Component({
  selector: 'app-bicycles-list',
  templateUrl: './bicycles-list.component.html',
  styleUrls: ['./bicycles-list.component.scss']
})
export class BicyclesListComponent implements OnInit {

  @Input() bikeCards: Bikes[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
