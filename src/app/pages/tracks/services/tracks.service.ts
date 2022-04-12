import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { Track } from '../models/track';
@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  getTracks(query?: object): Promise<Entry<any>[]> {
    const Locales = 'es';
    return this.cdaClient
      .getEntries<Track>(
        Object.assign(
          {
            content_type: environment.contentful.contentTypeIds.track,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
