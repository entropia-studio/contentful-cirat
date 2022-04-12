import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TracksComponent } from './tracks.component';
import { MatCardModule } from '@angular/material/card';
const routes: Routes = [
  {
    path: '',
    component: TracksComponent,
  },
];

@NgModule({
  declarations: [TracksComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
})
export class TracksModule {}
