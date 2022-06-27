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

  it('should emit provider when selected', () => {
    spyOn(component.onProviderSelect, 'emit');
    component.setActiveProvider(0);
    expect(component.onProviderSelect.emit).toHaveBeenCalledTimes(1);
    expect(component.onProviderSelect.emit).toHaveBeenCalledWith(0);
  });
});
