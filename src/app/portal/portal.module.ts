import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/containers/feed/feed.component';
import { DetailComponent } from './detail/containers/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MainFeedComponent } from './feed/components/main-feed/main-feed.component';
import { NormalFeedComponent } from './feed/components/normal-feed/normal-feed.component';

@NgModule({
  declarations: [FeedComponent, DetailComponent, MainFeedComponent, NormalFeedComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PortalModule {}
