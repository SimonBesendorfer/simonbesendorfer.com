import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpbotDetailComponent } from './impbot-detail.component';

describe('ImpbotDetailComponent', () => {
  let component: ImpbotDetailComponent;
  let fixture: ComponentFixture<ImpbotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpbotDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpbotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
