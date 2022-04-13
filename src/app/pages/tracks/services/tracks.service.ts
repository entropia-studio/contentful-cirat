import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { from, map, Observable, switchMap } from 'rxjs';
import { AppSettings } from 'src/app/common/appSettings';
import { LanguageService } from 'src/app/services/language.service';
import { environment } from 'src/environments/environment';
import { Store } from 'store';
import { ContentfulQuery } from '../models/contentfull-query';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  tracks$: Observable<contentful.Entry<Track>[]>;

  private cdaClient = contentful.createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor(private store: Store, private languageService: LanguageService) {
    this.tracks$ = this.languageService.lang.pipe(
      switchMap((lang) => {
        return from(this.getTracks({ lang })).pipe(
          map((tracks) => tracks.items)
        );
      })
    );
  }

  async getTracks(
    query?: ContentfulQuery
  ): Promise<contentful.EntryCollection<Track>> {
    const tracks = await this.cdaClient.getEntries<Track>({
      content_type: 'track',
      locale: query?.lang || AppSettings.LANGUAGES.EN,
    });
    this.store.set('tracks', tracks.items);
    return tracks;
  }

  async getTrack(
    id: string,
    query?: ContentfulQuery
  ): Promise<contentful.Entry<Track>> {
    const track = await this.cdaClient.getEntry<Track>(id, {
      content_type: 'track',
      locale: query?.lang || AppSettings.LANGUAGES.EN,
    });

    return track;
  }
}
