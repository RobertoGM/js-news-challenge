import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalFeedComponent } from './normal-feed.component';

describe('NormalFeedComponent', () => {
  let component: NormalFeedComponent;
  let fixture: ComponentFixture<NormalFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
