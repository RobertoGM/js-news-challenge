import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarComponent } from './left-sidebar.component';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render number of news', () => {
    component.amountOfNews = 2;
    fixture.detectChanges();
    const newsDe: DebugElement = fixture.debugElement;
    const newsEl: HTMLElement = newsDe.nativeElement;
    const b = newsEl.querySelector('#newsCount')!;
    expect(b.textContent).toBe('2 Noticias');
  });

  it('should emit provider when selected', () => {
    spyOn(component.onProviderSelect, 'emit');
    component.setActiveProvider(0);
    expect(component.onProviderSelect.emit).toHaveBeenCalledTimes(1);
    expect(component.onProviderSelect.emit).toHaveBeenCalledWith(0);
  });
});
