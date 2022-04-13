import { Component, OnInit } from '@angular/core';
import * as contentful from 'contentful';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ContentfulService } from 'src/app/utils/contentful.service';
import { Store } from 'store';
import { Track } from './models/track';
import { TracksService } from './services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  tracks: contentful.Entry<Track>[] = [];
  tracks$!: Observable<contentful.Entry<Track>[]>;
  subscription!: Subscription;

  constructor(
    private tracksService: TracksService,
    private contentfulService: ContentfulService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.tracksService.getTracks().then((tracks) => {
      this.tracks = tracks.items;
      console.log('promise', this.tracks);
    });

    this.subscription = this.tracksService.tracks$.subscribe();
    this.tracks$ = this.store.select('tracks');
  }

  getFirstParagraph(richText: unknown): string {
    const description = this.contentfulService.returnHtmlFromRichText(richText);
    let firstDot = description.indexOf('.', 150);
    return description.slice(0, firstDot + 1);
  }
}
