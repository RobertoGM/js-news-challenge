import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/containers/feed/feed.component';
import { DetailComponent } from './detail/containers/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: ':trend',
    component: FeedComponent,
  },
  {
    path: 'details/:id',
    component: DetailComponent,
  },
];

@NgModule({
  declarations: [FeedComponent, DetailComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class PortalModule {}
