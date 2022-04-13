import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../common/appSettings';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private subject = new BehaviorSubject<string>(AppSettings.LANGUAGES.EN);
  private lang$ = this.subject.asObservable();

  constructor() {}

  changeLang(lang: string) {
    this.subject.next(lang);
  }

  get lang() {
    return this.lang$;
  }
}
