import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingOfFireComponent } from './ring-of-fire.component';

describe('RingOfFireComponent', () => {
  let component: RingOfFireComponent;
  let fixture: ComponentFixture<RingOfFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingOfFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingOfFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
