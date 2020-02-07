import {Component} from '@angular/core';

export interface MenuItems {
  title: string;
}

export interface Bikes {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuItems: MenuItems[] = [
    {title: 'пункт первый'},
    {title: 'пункт второй'},
    {title: 'пункт третий'}
  ];

  public bikeCards: Bikes[] = [
    {title: 'Городские'},
    {title: 'Горные / Универсальные'},
    {title: 'Шоссейные / Триатлон'},
    {title: 'Экстрим (BMX)'}
  ];


}

// todo сделать закрытие меню (mouseleave)
