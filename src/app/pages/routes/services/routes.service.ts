import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Store } from 'store';
import * as contentful from 'contentful';
import { Track } from '../../tracks/models/track';
import { AppSettings } from 'src/app/common/appSettings';
import { from, map, Observable, switchMap } from 'rxjs';
import { ContentfulQuery } from '../../tracks/models/contentfull-query';
import { environment } from 'src/environments/environment';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  tracks$!: Observable<
    contentful.EntryWithLinkResolutionAndWithUnresolvableLinks<Track>[]
  >;
  locale: string = AppSettings.LANGUAGES.EN;

  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor(private store: Store, private languageService: LanguageService) {
    // this.tracks$ = this.languageService.lang.pipe(
    //   switchMap((lang) => {
    //     this.locale = lang;
    //     return from(this.getTracks()).pipe(map((tracks) => tracks.items));
    //   })
    // );
  }

  // async getTracks(
  //   query?: ContentfulQuery
  // ): Promise<
  //   contentful.EntryCollectionWithLinkResolutionAndWithUnresolvableLinks<Track>
  // > {
  //   const queryObj = {
  //     content_type: 'track',
  //     locale: this.locale,
  //     ...query,
  //   };

  //   const tracks = await this.cdaClient.getEntries<Track>(queryObj);
  //   this.store.set('tracks', tracks.items);
  //   return tracks;
  // }
}
