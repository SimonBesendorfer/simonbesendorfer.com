import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDetailComponent } from './join-detail.component';

describe('JoinDetailComponent', () => {
  let component: JoinDetailComponent;
  let fixture: ComponentFixture<JoinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
