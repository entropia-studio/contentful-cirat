import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks/services/tracks.service';
import { RoutesService } from './services/routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {
  constructor(private routesService: RoutesService) {}

  ngOnInit(): void {}
}
