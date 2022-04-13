import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TrackDetailComponent } from './track-detail/track-detail.component';
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
  ],
})
export class TracksModule {}
