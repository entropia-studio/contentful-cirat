import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { TrackDetailComponent } from './track-detail/track-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: TracksComponent,
  },
  {
    path: ':slug',
    component: TrackDetailComponent,
  },
];

@NgModule({
  declarations: [TracksComponent, TrackDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class TracksModule {}
