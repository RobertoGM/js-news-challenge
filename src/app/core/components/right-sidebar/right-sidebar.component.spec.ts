import { Observable, of } from 'rxjs';
import {
  RightSidebarStatus,
  SidebarsService,
} from './../../services/sidebars.service';
import { TrendsService } from './../../../portal/feed/services/trends.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { RightSidebarComponent } from './right-sidebar.component';
import { TrendFeed } from 'src/app/portal/feed/models/news.model';
import { DebugElement, enableProdMode } from '@angular/core';
import { By } from '@angular/platform-browser';

class TrendsServiceMock {
  public loadSingleTrend(): Observable<any> {
    return of();
  }
}

describe('RightSidebarComponent', () => {
  let component: RightSidebarComponent;
  let fixture: ComponentFixture<RightSidebarComponent>;
  let trendsService: TrendsService;
  let sidebarsService: SidebarsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSidebarComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    trendsService = TestBed.inject(TrendsService);
    sidebarsService = TestBed.inject(SidebarsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title for new news when add mode', () => {
    component.rightSidebarStatus = RightSidebarStatus.add;
    fixture.detectChanges();
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('span')!;
    expect(p.textContent).toEqual('Nueva noticia');
  });

  it('should show title for edit news when edit mode', () => {
    component.rightSidebarStatus = RightSidebarStatus.edit;
    fixture.detectChanges();
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('span')!;
    expect(p.textContent).toEqual('Edita la noticia');
  });

  it('should call save when the sidebar is opened in add mode', () => {
    spyOn(trendsService, 'saveProviderTrends').and.returnValue(of());
    spyOn(trendsService, 'editProviderTrends').and.returnValue(of());
    component.rightSidebarStatus = RightSidebarStatus.add;
    component.save();
    expect(trendsService.saveProviderTrends).toHaveBeenCalled();
    expect(trendsService.editProviderTrends).not.toHaveBeenCalled();
  });

  it('should call edit when the sidebar is opened in edit mode', () => {
    spyOn(trendsService, 'editProviderTrends').and.returnValue(of());
    spyOn(trendsService, 'saveProviderTrends').and.returnValue(of());
    component.rightSidebarStatus = RightSidebarStatus.edit;
    component.trendId = 'id';
    component.save();
    expect(trendsService.editProviderTrends).toHaveBeenCalled();
    expect(trendsService.saveProviderTrends).not.toHaveBeenCalled();
  });
});
