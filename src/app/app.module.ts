import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './core/containers/app-component/app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PortalModule } from './portal/portal.module';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'news' },
  {
    path: 'news',
    loadChildren: () =>
      import('./portal/portal.module').then((m) => m.PortalModule),
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
