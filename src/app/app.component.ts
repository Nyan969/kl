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
// todo найти как убрать пустое пространство вокруг контента
// todo разобраться почему не отображается картинка в img
// todo разобраться почему не билдится нормально
