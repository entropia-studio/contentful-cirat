import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cirat Tourism';

  constructor(private headerService: LanguageService) {}

  changeLang(lang: string) {
    this.headerService.changeLang(lang);
  }
}
