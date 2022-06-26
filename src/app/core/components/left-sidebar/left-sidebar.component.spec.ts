import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarComponent } from './left-sidebar.component';
import { Router } from '@angular/router';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSidebarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to show all news without provider when provider is not active', () => {
    spyOn(router, 'navigate');
    component.setActiveProvider();
    expect(router.navigate).toHaveBeenCalledWith([`news`]);
    expect(router.navigate).not.toHaveBeenCalledWith([`news/elpais`]);
  });

  it('should navigate to a provider when activated', () => {
    spyOn(router, 'navigate');
    component.setActiveProvider(0);
    expect(router.navigate).toHaveBeenCalledWith([`news/elmundo`]);
    expect(router.navigate).not.toHaveBeenCalledWith([`news`]);
  });
});
