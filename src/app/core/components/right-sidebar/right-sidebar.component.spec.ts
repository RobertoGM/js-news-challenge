import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarComponent } from './right-sidebar.component';
import { RightSidebarStatus } from '../../models/sidebar.model';
import { DebugElement } from '@angular/core';

describe('RightSidebarComponent', () => {
  let component: RightSidebarComponent;
  let fixture: ComponentFixture<RightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title for new news when add mode', () => {
    component.status = RightSidebarStatus.add;
    fixture.detectChanges();
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('span')!;
    expect(p.textContent).toEqual('Nueva noticia');
  });

  it('should emit close when clicked on Cancel', () => {
    spyOn(component.onClose, 'emit');
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const b = buttonEl.querySelector('#closeButton')!;
    b.dispatchEvent(new Event('click'));
    expect(component.onClose.emit).toHaveBeenCalledTimes(1);
    expect(component.onClose.emit).toHaveBeenCalledWith();
  });

  it('should emit save when clicked on Guardar and status is add', () => {
    spyOn(component.onSave, 'emit');
    spyOn(component.onEdit, 'emit');
    component.status = RightSidebarStatus.add;
    fixture.detectChanges();
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const b = buttonEl.querySelector('#submitButton')!;
    b.dispatchEvent(new Event('click'));
    expect(component.onSave.emit).toHaveBeenCalledTimes(1);
    expect(component.onEdit.emit).toHaveBeenCalledTimes(0);
  });

  it('should emit edit when clicked on Guardar and status is edit', () => {
    spyOn(component.onSave, 'emit');
    spyOn(component.onEdit, 'emit');
    component.selectedNews = {
      _id: '1',
      body: 'b',
      image: 'i',
      title: 't',
      createdAt: 'ca',
      provider: 'p',
      url: 'u',
    };
    component.status = RightSidebarStatus.edit;
    component.ngOnInit();
    fixture.detectChanges();
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const b = buttonEl.querySelector('#submitButton')!;
    b.dispatchEvent(new Event('click'));
    expect(component.onEdit.emit).toHaveBeenCalledOnceWith({
      trend: {
        body: 'b',
        title: 't',
        provider: 'p',
        url: 'u',
      },
      id: '1',
    });
    expect(component.onSave.emit).toHaveBeenCalledTimes(0);
  });
});
