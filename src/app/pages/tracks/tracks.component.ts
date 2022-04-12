import { Component, OnInit } from '@angular/core';
import * as contentful from 'contentful';
import { ContentfulService } from 'src/app/utils/contentful.service';
import { Track } from './models/track';
import { TracksService } from './services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  tracks: contentful.Entry<Track>[] = [];

  constructor(
    private tracksService: TracksService,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.tracksService
      .getTracks()
      .then((tracks) => (this.tracks = tracks.items));
  }

  getFirstParagraph(richText: unknown): string {
    const description = this.contentfulService.returnHtmlFromRichText(richText);
    let firstDot = description.indexOf('.', 150);
    return description.slice(0, firstDot + 1);
  }
}
