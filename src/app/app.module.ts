import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './core/containers/app-component/app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PortalModule } from './portal/portal.module';
import { DetailComponent } from './portal/detail/containers/detail/detail.component';
import { FeedComponent } from './portal/feed/containers/feed/feed.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' },

  {
    path: 'news',
    component: FeedComponent,
  },
  {
    path: 'news/:trend',
    component: FeedComponent,
  },
  {
    path: 'details/:id',
    component: DetailComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'news' },
];

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    PortalModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
