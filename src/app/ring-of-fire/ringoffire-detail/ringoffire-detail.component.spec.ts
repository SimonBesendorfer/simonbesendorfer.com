import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingoffireDetailComponent } from './ringoffire-detail.component';

describe('RingoffireDetailComponent', () => {
  let component: RingoffireDetailComponent;
  let fixture: ComponentFixture<RingoffireDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingoffireDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingoffireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
