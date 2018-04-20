import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {
  public locales = [
      'fr-FR',
      'en-US',
      'es-ES',
      'ru-RU',
      'ja-JA'
  ];
  public locale = '';
  public date: Date = new Date();

  constructor(@Inject(LOCALE_ID) public local: string) {
    this.locale = local;
  }

  ngOnInit() {
  }

}
