import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from 'src/environments/environment';
import { Track } from '../models/track';
type Locales = 'es';
@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private cdaClient = contentful.createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  async getTracks(query?: object): Promise<contentful.EntryCollection<Track>> {
    const tracks = await this.cdaClient.getEntries<Track>({
      content_type: 'track',
      locale: 'en-US',
    });
    console.log(tracks);

    return tracks;
  }
}
