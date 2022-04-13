import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: RoutesComponent,
  },
];

@NgModule({
  declarations: [RoutesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RoutesModule {}
