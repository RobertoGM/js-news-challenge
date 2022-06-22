import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septimbre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  today: string =
    new Date().getDate() +
    ' ' +
    this.months[new Date().getMonth()] +
    ' ' +
    new Date().getFullYear();

  constructor() {}
}
