import { selectDetailFeed } from './../../store/selectors/detail.selectors';
import { Store } from '@ngrx/store';
import { TrendsService } from './../../../feed/services/trends.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrendFeed } from 'src/app/shared/models/feeds.model';
import { setRightSidebarStatus } from 'src/app/core/store/actions/sidebar.actions';
import { exitDetail, loadDetail } from '../../store/actions/detail.actions';
import { selectDetailLoading } from '../../store/selectors/detail.selectors';
import { Observable } from 'rxjs';
import { RightSidebarStatus } from 'src/app/core/models/sidebar.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit, OnDestroy {
  detailLoading$: Observable<boolean> = this.store.select(selectDetailLoading);

  detailFeed$: Observable<TrendFeed | undefined> =
    this.store.select(selectDetailFeed);

  rightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trendsService: TrendsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.store.dispatch(loadDetail({ id: params['id'] }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(exitDetail());
  }

  goBack(): void {
    this.router.navigate(['/news']);
  }

  removeNew(id: string): void {
    this.trendsService.removeTrend(id).subscribe(() => this.goBack());
  }

  openSidebar(status: number): void {
    this.store.dispatch(setRightSidebarStatus({ status }));
  }
}
