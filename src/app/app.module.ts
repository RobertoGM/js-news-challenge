import { DetailEffects } from './portal/detail/store/effects/detail.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './core/containers/app-component/app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PortalModule } from './portal/portal.module';
import { DetailComponent } from './portal/detail/containers/detail/detail.component';
import { FeedComponent } from './portal/feed/containers/feed/feed.component';
import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './core/store/reducers/sidebar.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { detailReducer } from './portal/detail/store/reducers/detail.reducer';
import { feedReducer } from './portal/feed/store/reducer/feed.reducer';
import { FeedEffects } from './portal/feed/store/effects/feed.effects';

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
    StoreModule.forRoot({ sidebar: sidebarReducer, detail: detailReducer, feed: feedReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([DetailEffects, FeedEffects, DetailEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
