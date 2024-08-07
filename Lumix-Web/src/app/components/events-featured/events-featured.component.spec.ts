import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFeaturedComponent } from './events-featured.component';

describe('EventsFeaturedComponent', () => {
  let component: EventsFeaturedComponent;
  let fixture: ComponentFixture<EventsFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
