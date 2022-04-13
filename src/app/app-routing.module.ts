import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routes',
    pathMatch: 'full',
  },
  {
    path: 'tracks',
    loadChildren: () =>
      import('./pages/tracks/tracks.module').then((m) => m.TracksModule),
  },
  {
    path: 'routes',
    loadChildren: () =>
      import('./pages/routes/routes.module').then((m) => m.RoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
